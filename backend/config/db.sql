/* ====================================================================================================== */
/* ------------------------------------ ElectroHub Database Schema ------------------------------------ */
/* ====================================================================================================== */

-- 1. CREATE DATABASE
    CREATE DATABASE ElectroHub;

-- 2. CONNECT TO DATABASE (if needed)
    \c ElectroHub;

-- 3. Set default timezone for storing time universally
-- Ensures consistent handling of time regardless of server/client settings
    SET timezone = 'UTC'; 

-- ##############################################################################
-- # SECTION 2: CREATE TABLES IN DEPENDENCY ORDER
-- # Tables with no foreign keys are created first.
-- # Tables with foreign keys are created after the tables they reference.
-- ##############################################################################

-- 3. ROLES TABLE - No dependencies
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE, -- Role name (e.g., 'user', 'admin')
    description TEXT -- Description of the role
);

-- 4. CATEGORIES TABLE - No dependencies
-- Stores product categories like 'Smartphones', 'Laptops', etc.
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE, -- Category name
    description TEXT -- Description of the category
);

-- 5. DISCOUNTS TABLE - No dependencies
-- Defines discount rules (coupons, automatic sales)
CREATE TABLE discounts (
    discount_id SERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NULL, -- Coupon code (NULL for automatic discounts)
    description TEXT, -- Description of the discount
    discount_type VARCHAR(50) NOT NULL CHECK (discount_type IN ('percentage', 'fixed_amount')),
    discount_value DECIMAL(10, 2) NOT NULL CHECK (discount_value >= 0), -- The value of the discount (e.g., 0.10 for 10%, 20.00 for $20)
    start_date TIMESTAMP WITH TIME ZONE, 
    end_date TIMESTAMP WITH TIME ZONE, 
    is_active BOOLEAN DEFAULT TRUE, -- Whether the discount is currently active
    requires_code BOOLEAN NOT NULL DEFAULT TRUE, -- TRUE if user must enter a code, FALSE for automatic discounts
    applies_to VARCHAR(20) NOT NULL DEFAULT 'products' CHECK (applies_to IN ('products', 'total')), -- 'products' for item discount, 'total' for order total discount
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the discount rule was created
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP -- When the discount rule was last updated
);

-- 6. NEWSLETTER SUBSCRIPTIONS TABLE - No dependencies
-- Stores emails of users subscribed to the newsletter
CREATE TABLE newsletter_subscriptions (
    subscription_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE, -- Subscriber's email address
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the user subscribed
    is_active BOOLEAN DEFAULT TRUE -- Whether the subscription is currently active
);

-- 7. USERS TABLE - Depends on ROLES
-- Stores user account information
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE, -- Optional: unique username for login
    email VARCHAR(255) NOT NULL UNIQUE CHECK (email LIKE '%@%._%'), -- User's email address (unique, basic format check)
    password_hash VARCHAR(255) NOT NULL, -- Stores hashed password
    first_name VARCHAR(100) NOT NULL, -- User's first name
    last_name VARCHAR(100) NOT NULL, -- User's last name
    full_name TEXT GENERATED ALWAYS AS (first_name || ' ' || last_name) STORED, -- Generated full name
    phone_number VARCHAR(25), -- User's phone number (optional)
    address TEXT, -- User's default address (optional)
    city VARCHAR(50), -- User's default city (optional)
    state VARCHAR(50), -- User's default state (optional)
    country VARCHAR(50), -- User's default country (optional)
    postal_code VARCHAR(30), -- User's default postal code (optional)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the user account was created
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the user account was last updated
    role_id INTEGER NOT NULL REFERENCES roles(role_id), -- Links user to their role
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'banned')), -- User account status
    last_login TIMESTAMP WITH TIME ZONE -- Timestamp of the user's last login
);

-- 8. PRODUCTS TABLE - Depends on CATEGORIES
-- Stores details about each product
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL, -- Product name
    description TEXT NOT NULL, -- Product description
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0), -- Product price
    stock_quantity INTEGER NOT NULL CHECK (stock_quantity >= 0) DEFAULT 0, -- Number of items in stock
    category_id INTEGER NOT NULL REFERENCES categories(category_id), -- Links product to its category
    image_url VARCHAR(255) NOT NULL, -- URL of the product image
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the product was added
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the product details were last updated
    is_featured BOOLEAN DEFAULT FALSE, -- Flag for featured products
    is_trending BOOLEAN DEFAULT FALSE -- Flag for trending products
);

-- 9. PASSWORD RESETS TABLE - Depends on USERS
-- Stores temporary tokens used for resetting user passwords
CREATE TABLE password_resets (
    reset_id SERIAL PRIMARY KEY, -- Unique ID for the reset request
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE, -- The user requesting the password reset
    token VARCHAR(255) NOT NULL UNIQUE, -- The unique token sent to the user
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP -- Timestamp when the token was created (used to check expiry)
    is_used BOOLEAN DEFAULT FALSE -- Flag to indicate if the token has been used
    expires_at TIMESTAMP WITH TIME ZONE -- Explicit expiry time for the token
);

-- 10. USER COUPONS TABLE - Depends on USERS, DISCOUNTS
-- Links specific discount rules (coupons) to individual users for user-specific offers
CREATE TABLE user_coupons (
    user_coupon_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE, -- The user who owns this coupon
    discount_id INTEGER NOT NULL REFERENCES discounts(discount_id) ON DELETE CASCADE, -- The discount rule assigned to the user
    is_used BOOLEAN NOT NULL DEFAULT FALSE, -- Flag to track if this specific coupon instance has been used by the user
    assigned_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the coupon was assigned to the user
    used_at TIMESTAMP WITH TIME ZONE, -- When the coupon was used by the user
    UNIQUE (user_id, discount_id) -- Ensures a specific discount rule is assigned only once per user via this table
);

-- 11. CARTS TABLE - Depends on USERS
-- Represents a user's shopping cart instance
CREATE TABLE carts (
    cart_id SERIAL PRIMARY KEY, 
    user_id INTEGER NOT NULL UNIQUE REFERENCES users(user_id) ON DELETE CASCADE, -- Links a cart to a user (one cart per user)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the cart was created
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP -- When the cart was last updated
);

-- 12. FAVORITE PRODUCTS TABLE - Depends on USERS, PRODUCTS
-- Stores products that users have marked as favorites
CREATE TABLE favorite_products ( -- Keeping the single table structure as discussed
    favorite_id SERIAL PRIMARY KEY, -- Unique ID for the favorite entry
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE, -- Links favorite to a user
    product_id INTEGER NOT NULL REFERENCES products(product_id) ON DELETE CASCADE, -- Links favorite to a product
    added_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the product was favorited
    UNIQUE (user_id, product_id) -- A user can only favorite a product once
);

-- 13. MESSAGES TABLE - Depends on USERS (user_id is NULLable)
-- Handles contact form messages from users (registered or not)
-- Using a single table with fields for admin reply for simplicity
CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY, -- Unique ID for the message
    user_id INTEGER REFERENCES users(user_id) ON DELETE SET NULL, -- NULL if message is from non-registered user
    name VARCHAR(255), -- Name provided if user_id is NULL
    email VARCHAR(255) NOT NULL, -- Email for contact
    subject VARCHAR(255), -- Subject of the message (optional)
    message_text TEXT NOT NULL, -- The content of the message
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the message was sent
    is_read BOOLEAN DEFAULT FALSE, -- Admin read status
    admin_reply_text TEXT, -- Text of the admin's reply (NULL if not replied)
    replied_at TIMESTAMP WITH TIME ZONE -- Timestamp when the admin replied (NULL if not replied)
);

-- 14. PRODUCT REVIEWS TABLE - Depends on USERS, PRODUCTS
-- Stores ratings and reviews written by users for products
CREATE TABLE product_reviews (
    review_id SERIAL PRIMARY KEY, -- Unique ID for the review
    product_id INTEGER NOT NULL REFERENCES products(product_id) ON DELETE CASCADE, -- The product being reviewed (delete reviews if product is deleted)
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE, -- The user who wrote the review (delete reviews if user is deleted)
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5), -- The star rating (e.g., 1 to 5)
    review_text TEXT, -- The text of the review (optional if only rating is required)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- Timestamp when the review was written
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- Timestamp when the review was last updated

    UNIQUE (product_id, user_id) -- Ensures a user can write only one review per product
);

-- 15. ORDERS TABLE - Depends on USERS, DISCOUNTS
-- Stores details about each placed order
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY, -- Unique ID for the order
    user_id INTEGER NOT NULL REFERENCES users(user_id), -- User who placed the order
    order_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the order was placed
    total_amount DECIMAL(10, 2) NOT NULL CHECK (total_amount >= 0), -- Final total amount paid (after discounts, before tax/shipping if not included)
    shipping_address TEXT NOT NULL, -- Shipping address for this specific order (snapshot)
    shipping_city VARCHAR(255) NOT NULL,
    shipping_state VARCHAR(255),
    shipping_postal_code VARCHAR(20) NOT NULL,
    shipping_country VARCHAR(255) NOT NULL,
    order_status VARCHAR(50) NOT NULL DEFAULT 'pending' CHECK (order_status IN ('received', 'on the way', 'pending', 'canceled', 'delivered')), -- Current status of the order
    payment_method VARCHAR(50), -- Payment method used (e.g., 'credit_card', 'paypal')
    payment_status VARCHAR(50) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed')), -- Status of the payment
    stripe_transaction_id VARCHAR(100) UNIQUE, -- Optional: Store transaction ID from payment gateway
    shipped_at TIMESTAMP WITH TIME ZONE, -- When the order was shipped
    delivered_at TIMESTAMP WITH TIME ZONE, -- When the order was delivered
    discount_id INTEGER REFERENCES discounts(discount_id), -- Links to the main discount rule applied to the order (e.g., a coupon)
    discount_amount_applied DECIMAL(10, 2) DEFAULT 0 CHECK (discount_amount_applied >= 0) -- The total monetary value of the discount applied to this order
);

-- 16. PRODUCT DISCOUNTS TABLE - Depends on PRODUCTS, DISCOUNTS
-- Links discount rules (specifically those with applies_to='products') to products
CREATE TABLE product_discounts (
    product_discount_id SERIAL PRIMARY KEY, -- Unique ID for this linking entry
    discount_id INTEGER NOT NULL REFERENCES discounts(discount_id) ON DELETE CASCADE, -- The discount rule
    product_id INTEGER NOT NULL REFERENCES products(product_id) ON DELETE CASCADE, -- The product it applies to
    UNIQUE (discount_id, product_id) -- Prevents duplicating links between a discount and a product
);

-- 17. CART ITEMS TABLE - Depends on CARTS, PRODUCTS
-- Stores the products currently in a user's shopping cart
CREATE TABLE cart_items (
    cart_item_id SERIAL PRIMARY KEY, -- Unique ID for the cart item entry
    cart_id INTEGER NOT NULL REFERENCES carts(cart_id) ON DELETE CASCADE, -- The cart the item belongs to
    product_id INTEGER NOT NULL REFERENCES products(product_id) ON DELETE CASCADE, -- The product in the cart
    quantity INTEGER NOT NULL CHECK (quantity > 0), -- Quantity of the product
    added_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- When the item was added to the cart
    UNIQUE (cart_id, product_id) -- A product can only appear once in a given cart
);

-- 18. ORDER ITEMS TABLE - Depends on ORDERS, PRODUCTS
-- Stores the individual products included within an order (a snapshot at the time of order)
CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY, -- Unique ID for the order item entry
    order_id INTEGER NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE, -- The order this item belongs to (delete items if order is deleted)
    product_id INTEGER NOT NULL REFERENCES products(product_id), -- The product ordered (FK ON DELETE NO ACTION is common to preserve historical order data even if product is removed)
    quantity INTEGER NOT NULL CHECK (quantity > 0), -- Quantity ordered
    price_per_unit DECIMAL(10, 2) NOT NULL CHECK (price_per_unit >= 0), -- Price of the product AT THE TIME OF ORDER (important for historical accuracy)
    line_item_total DECIMAL(10, 2) NOT NULL CHECK (line_item_total >= 0) -- quantity * price_per_unit (should equal quantity * price_per_unit)
);


-- ##############################################################################
-- # SECTION 3: ADD INDEXES FOR PERFORMANCE
-- # Improve the speed of queries on frequently searched or joined columns
-- ##############################################################################

-- Indexes for lookup/joining on common fields
CREATE INDEX idx_roles_name ON roles(name);
CREATE INDEX idx_categories_name ON categories(name);
CREATE INDEX idx_discounts_code ON discounts(code); -- Useful for finding discounts by code
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username); -- If username login is used
CREATE INDEX idx_users_role_id ON users(role_id); -- Useful for querying users by role
CREATE INDEX idx_products_category_id ON products(category_id); -- Useful for querying products by category

-- Indexes for the new tables
CREATE INDEX idx_password_resets_user_id ON password_resets(user_id); -- Useful for finding reset tokens for a user
CREATE INDEX idx_password_resets_token ON password_resets(token); -- Critical for looking up tokens quickly (UNIQUE constraint also helps)
CREATE INDEX idx_product_reviews_user_id ON product_reviews(user_id); -- Useful for finding all reviews by a user
CREATE INDEX idx_product_reviews_product_id ON product_reviews(product_id); -- Useful for finding all reviews for a product

-- Indexes for linking tables (improves join performance)
CREATE INDEX idx_user_coupons_user_id ON user_coupons(user_id);
CREATE INDEX idx_user_coupons_discount_id ON user_coupons(discount_id);
CREATE INDEX idx_cart_items_cart_id ON cart_items(cart_id);
CREATE INDEX idx_cart_items_product_id ON cart_items(product_id);
CREATE INDEX idx_product_discounts_discount_id ON product_discounts(discount_id);
CREATE INDEX idx_product_discounts_product_id ON product_discounts(product_id);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);

-- Indexes for commonly queried columns in large tables
CREATE INDEX idx_orders_user_id ON orders(user_id); -- Useful for finding all orders by a user
CREATE INDEX idx_orders_order_date ON orders(order_date); -- Useful for date-based order lookups
CREATE INDEX idx_orders_order_status ON orders(order_status); -- Useful for querying orders by status
CREATE INDEX idx_orders_discount_id ON orders(discount_id); -- Useful for finding orders where a specific discount was applied

-- ##############################################################################
-- # SECTION 4: OPTIONAL INITIAL DATA (Example Roles)
-- ##############################################################################

-- Insert basic roles
-- INSERT INTO roles (name, description) VALUES ('user', 'Standard user role');
-- INSERT INTO roles (name, description) VALUES ('admin', 'Administrator role');

-- Insert a default admin user (remember to hash the password!)
-- INSERT INTO users (username, email, password_hash, first_name, last_name, role_id, status)
-- VALUES ('admin_user', 'admin@electrohub.com', 'replace_with_hashed_password', 'Admin', 'User', (SELECT role_id FROM roles WHERE name = 'admin'), 'active');


-- First, ensure you have an 'Uncategorized' category with category_id 999.
-- If you don't have one, insert it with this specific ID.
-- Example: INSERT INTO categories (category_id, name, description) VALUES (999, 'Uncategorized', 'Products without a specific category');
-- You should also ensure this specific category_id (999) is not used by any other category.


-- ##############################################################################
-- # SECTION 5: CRATE A TRIGGERS TO IMPROVE THE LOGIC
-- ##############################################################################

-- Function to prevent deleting the 'Uncategorized' category itself
CREATE OR REPLACE FUNCTION prevent_uncategorized_delete()
RETURNS TRIGGER AS $$
BEGIN
    -- Prevent deletion if the category_id is 999 (the Uncategorized category ID)
    IF OLD.category_id = 999 THEN
        RAISE EXCEPTION 'Cannot delete the Uncategorized category (ID 999).';
    END IF;
    RETURN OLD; -- Allow the delete to proceed for other categories
END;
$$ LANGUAGE plpgsql;

-- Optional: Trigger to call the function above before deleting from categories
CREATE TRIGGER prevent_uncategorized_delete_trigger
BEFORE DELETE ON categories
FOR EACH ROW
EXECUTE FUNCTION prevent_uncategorized_delete();


-- Now, the trigger to set products to 'Uncategorized' when their category is deleted
CREATE OR REPLACE FUNCTION set_products_to_uncategorized()
RETURNS TRIGGER AS $$
BEGIN
    -- Update the products table
    -- Set the category_id of products that belonged to the deleted category (OLD.category_id)
    -- to the ID of the 'Uncategorized' category (999).
    UPDATE products
    SET category_id = 999 -- Set to the ID of your 'Uncategorized' category
    WHERE category_id = OLD.category_id;

    -- RETURN OLD is required for BEFORE triggers
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger
-- This trigger fires BEFORE a row is deleted from the categories table
-- For each row being deleted, it executes the set_products_to_uncategorized function
CREATE TRIGGER set_uncategorized_category_trigger
BEFORE DELETE ON categories
FOR EACH ROW
EXECUTE FUNCTION set_products_to_uncategorized();

-- Initialize Roles
INSERT INTO roles (name, description) VALUES 
('admin', 'Administrator with full access'),
('user', 'Standard user with basic access');

-- Initialize Categories
INSERT INTO categories (category_id, name, description) VALUES 
(1, 'SmartPhones', 'Mobile phones and tablets'),
(2, 'Laptops', 'Portable computers and accessories'),
(3, 'Gaming', 'Gaming consoles and accessories'),
(4, 'Accessories', 'Electronic accessories and peripherals'),
(5, 'Cameras', 'Digital cameras and photography equipment'),
(999, 'Uncategorized', 'Products without a specific category');

