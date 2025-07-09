import { useState , useEffect} from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

// Mobile Product Card Component
const MobileProductCard = ({ product, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-start gap-4">
        <img
          src={product.image_url && product.image_url.startsWith('/assets/products-image/') ? `http://localhost:5000${product.image_url}` : product.image_url}
          alt={product.name}
          className="h-20 w-20 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">{product.company}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-900">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500">
              Stock: {product.stock_quantity}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                product.stock_quantity > 0
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.stock_quantity > 0 ? "In Stock" : "Out of Stock"}
            </span>
            {product.is_featured && (
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                Featured
              </span>
            )}
            {product.is_trending && (
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                Trending
              </span>
            )}
          </div>
          <div className="mt-3 flex justify-end gap-2">
            <Link
              to={`/admin/products/edit/${product.product_id}`}
              className="text-main-green hover:text-green-700"
            >
              <FaEdit />
            </Link>
            <button
              onClick={() => onDelete(product.product_id)}
              className="text-red-600 hover:text-red-900"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  // Test data remains the same...
  useEffect(() => {
    // Fetch products data from API or use static data
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);


  const [products , setProducts] = useState([]); // Assuming productsData is imported or defined above
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [stockRange, setStockRange] = useState({ min: "", max: "" });
  const [statusFilter, setStatusFilter] = useState("all");

  // Get unique categories and companies for filter dropdowns
  const categories = [...new Set(products.map((product) => product.category_name))];
  const companies = [...new Set(products.map((product) => product.company))];

  // Filter products based on all criteria
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || product.category_name === selectedCategory;
    const matchesCompany =
      selectedCompany === "" || product.company === selectedCompany;
    const matchesPrice =
      (!priceRange.min || product.price >= Number(priceRange.min)) &&
      (!priceRange.max || product.price <= Number(priceRange.max));
    const matchesStock =
      (!stockRange.min || product.stock_quantity >= Number(stockRange.min)) &&
      (!stockRange.max || product.stock_quantity <= Number(stockRange.max));
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "featured" && product.is_featured) ||
      (statusFilter === "trending" && product.is_trending);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesCompany &&
      matchesPrice &&
      matchesStock &&
      matchesStatus
    );
  });

  const handleDeleteProduct = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (!response.ok) throw new Error("Failed to delete product");
      setProducts((prev) => prev.filter((p) => p.product_id !== productId));
      alert("Product deleted successfully!");
    } catch (err) {
      alert("Error deleting product: " + err.message);
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-4 md:p-6 lg:p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          to="/admin/products/add"
          className="bg-main-green text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FaPlus /> Add Product
        </Link>
      </div>

      {/* Enhanced Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search products..."
            className="border rounded-lg px-4 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Category Filter */}
          <select
            className="border rounded-lg px-4 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Company Filter */}
          <select
            className="border rounded-lg px-4 py-2"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">All Companies</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            className="border rounded-lg px-4 py-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="featured">Featured</option>
            <option value="trending">Trending</option>
          </select>

          {/* Price Range Filter */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min Price"
              className="border rounded-lg px-4 py-2 w-1/2"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Max Price"
              className="border rounded-lg px-4 py-2 w-1/2"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: e.target.value })
              }
            />
          </div>

          {/* Stock Range Filter */}
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min Stock"
              className="border rounded-lg px-4 py-2 w-1/2"
              value={stockRange.min}
              onChange={(e) =>
                setStockRange({ ...stockRange, min: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Max Stock"
              className="border rounded-lg px-4 py-2 w-1/2"
              value={stockRange.max}
              onChange={(e) =>
                setStockRange({ ...stockRange, max: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <p className="text-sm text-gray-700">
            Showing {filteredProducts.length} of {products.length} products
          </p>
          {filteredProducts.length === 0 && (
            <div className="text-sm text-gray-500 italic">
              No products match your filters
            </div>
          )}
        </div>
      </div>

      {/* Products Display - Desktop Table View */}
      <div className="hidden md:block bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Image
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Name
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Price
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Stock
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Category
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Company
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Created At
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Status
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.product_id}>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <img
                      src={product.image_url && product.image_url.startsWith('/assets/products-image/') ? `http://localhost:5000${product.image_url}` : product.image_url}
                      alt={product.name}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {product.name}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${product.price}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {product.stock_quantity}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {product.category_name}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {product.company}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(product.created_at).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.stock_quantity > 0
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.stock_quantity > 0
                          ? "In Stock"
                          : "Out of Stock"}
                      </span>
                      {product.is_featured && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Featured
                        </span>
                      )}
                      {product.is_trending && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                          Trending
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-md font-medium">
                    <div className="flex gap-2">
                      <Link
                        to={`/admin/products/edit/${product.product_id}`}
                        className="text-main-green hover:text-green-700"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDeleteProduct(product.product_id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Products Display - Mobile Card View */}
      <div className="md:hidden">
        {filteredProducts.map((products) => (
          <MobileProductCard key={products.product_id} product={products} onDelete={handleDeleteProduct} />
        ))}
      </div>
    </div>
  );
};

export default Products;
