import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Complete product data including descriptions and prices
const productData = {
  Accessories: {
    "Apple iPhone 16 15 Charger Fast Charging": {
      description:
        "A powerful, fast-charging adapter designed specifically for iPhone 15 and 16 models. Quickly recharge your device and minimize downtime.",
      price: 29.99,
      stock_quantity: 50,
      is_featured: true,
      is_trending: true,
    },
    "JanSport Right Pack Backpack": {
      description:
        "A classic and durable backpack ideal for students, commuters, and travelers. Featuring spacious compartments, adjustable straps, and a comfortable back panel.",
      price: 49.99,
      stock_quantity: 35,
      is_featured: false,
      is_trending: true,
    },
    "MATEIN Travel Laptop Backpack": {
      description:
        "A versatile laptop backpack with multiple compartments to organize your belongings. Its padded laptop sleeve and water-resistant design ensure the safety of your device. Fits laptops up to 15.6 inches.",
      price: 59.99,
      stock_quantity: 40,
      is_featured: false,
      is_trending: false,
    },
    "Oterkin for Samsung Galaxy S24 Case Clear": {
      description:
        "A crystal-clear phone case that showcases the sleek design of your Samsung Galaxy S24 while providing reliable protection against scratches and drops.",
      price: 19.99,
      stock_quantity: 100,
      is_featured: false,
      is_trending: true,
    },
    "RAZER Basilisk V3 Wirless Gaming Mouse": {
      description:
        "A high-performance gaming mouse with customizable RGB lighting, programmable buttons, and advanced optical sensor for precise tracking and rapid response times. 11 programmable buttons, 20,000 DPI Optical Sensor.",
      price: 79.99,
      stock_quantity: 25,
      is_featured: true,
      is_trending: true,
    },
    "SteelSeries Apex Pro TKL HyperMagnetic Gaming Keyboard": {
      description:
        "A tenkeyless mechanical gaming keyboard with adjustable key switches for personalized typing and gaming experiences. Its sleek design and customizable RGB lighting elevate your gaming setup. Customizable key switches, per-key RGB lighting.",
      price: 199.99,
      stock_quantity: 15,
      is_featured: true,
      is_trending: false,
    },
    "TAGRY Bluetooth Headphones": {
      description:
        "Wireless Bluetooth headphones that deliver immersive sound quality and comfortable fit. Enjoy your favorite music, podcasts, and calls without the hassle of tangled wires. Up to 25 hours of battery life.",
      price: 39.99,
      stock_quantity: 50,
      is_featured: false,
      is_trending: true,
    },
    "TENDLIN Compatible with Samsung Galaxy S22 Plus Case": {
      description:
        "A protective case designed specifically for the Samsung Galaxy S22 Plus, offering reliable protection against scratches, bumps, and accidental drops.",
      price: 14.99,
      stock_quantity: 75,
      is_featured: false,
      is_trending: false,
    },
    "Apple Transparent ESR iphone 15 Pro Case": {
      description:
        "A clear, minimalist case that showcases the elegant design of your iPhone 15 Pro while providing essential protection.",
      price: 24.99,
      stock_quantity: 60,
      is_featured: false,
      is_trending: true,
    },
    "Hp USB Wired Computer Mouse": {
      description:
        "A reliable and affordable wired mouse for everyday computing tasks. Its ergonomic design and precise tracking ensure comfortable and efficient use.",
      price: 9.99,
      stock_quantity: 200,
      is_featured: false,
      is_trending: false,
    },
    "Hp Wireless Mouse Jiggler": {
      description:
        "A compact device that simulates mouse movement, preventing your computer from going into sleep mode or screen saver mode when unattended.",
      price: 12.99,
      stock_quantity: 45,
      is_featured: false,
      is_trending: false,
    },
    "Womier Keyboard": {
      description:
        "A customizable mechanical keyboard with vibrant RGB lighting and tactile key switches, offering a satisfying typing experience. Hot-swappable key switches, customizable RGB lighting.",
      price: 149.99,
      stock_quantity: 20,
      is_featured: true,
      is_trending: true,
    },
    "Ytonet Laptop Case": {
      description:
        "A protective laptop case with a durable outer shell and soft interior lining to safeguard your device during travel. Fits laptops up to 15.6 inches.",
      price: 29.99,
      stock_quantity: 55,
      is_featured: false,
      is_trending: false,
    },
    "AC01 Over-Ear Headphones Wired": {
      description:
        "Immerse yourself in rich audio with these over-ear headphones. The comfortable ear cushions and powerful drivers deliver exceptional sound quality.",
      price: 39.99,
      stock_quantity: 40,
      is_featured: false,
      is_trending: false,
    },
    "apple Homepod 2nd gen": {
      description:
        "A high-fidelity smart speaker that fills your room with stunning sound. Control your smart home devices, listen to music, and enjoy Siri voice assistant.",
      price: 299.99,
      stock_quantity: 25,
      is_featured: true,
      is_trending: true,
    },
    "Apple Watch Ultra 2": {
      description:
        "A rugged and durable smartwatch designed for extreme conditions. Track your fitness goals, receive notifications, and stay connected with cellular connectivity. Up to 36 hours of battery life, water resistance up to 100 meters.",
      price: 799.99,
      stock_quantity: 15,
      is_featured: true,
      is_trending: true,
    },
    "Beats Studio Buds": {
      description:
        "Compact and powerful wireless earbuds with active noise cancellation and immersive sound, perfect for on-the-go listening. Up to 8 hours of listening time, IPX4 water resistance.",
      price: 129.99,
      stock_quantity: 30,
      is_featured: true,
      is_trending: false,
    },
    "Bose QuietComfort Ultra": {
      description:
        "Premium noise-cancelling headphones that deliver exceptional sound quality and noise reduction for ultimate listening experiences. Up to 22 hours of battery life, Adaptive EQ.",
      price: 349.99,
      stock_quantity: 20,
      is_featured: true,
      is_trending: true,
    },
    "Dell Laptop Charger": {
      description:
        "A reliable and efficient charger for your Dell laptop, ensuring your device is always powered up.",
      price: 39.99,
      stock_quantity: 45,
      is_featured: false,
      is_trending: false,
    },
    "ESR for iPhone 15 Pro Case with MagSafe": {
      description:
        "A protective case with built-in MagSafe magnets for seamless wireless charging and accessory attachment.",
      price: 39.99,
      stock_quantity: 50,
      is_featured: false,
      is_trending: true,
    },
    "INIU Power Bank Charger": {
      description:
        "A portable power bank with high-capacity battery, allowing you to charge your devices on the go. Multiple charging ports, fast charging technology.",
      price: 24.99,
      stock_quantity: 65,
      is_featured: false,
      is_trending: false,
    },
  },
  Cameras: {
    "Canon EOS 5D 12.8 MP Digital SLR Camera": {
      description:
        "A professional-grade DSLR camera with a full-frame sensor, offering exceptional image quality and versatility.",
      price: 1999.99,
      stock_quantity: 15,
      is_featured: true,
      is_trending: false,
    },
    "Canon EOS R7": {
      description:
        "A powerful mirrorless camera with a high-resolution sensor and fast autofocus, ideal for both photography and videography.",
      price: 1499.99,
      stock_quantity: 10,
      is_featured: true,
      is_trending: true,
    },
    "Canon PowerShot ELPH 360 Digital Camera": {
      description:
        "A compact point-and-shoot camera with a 360-degree lens, perfect for capturing panoramic views and immersive photos.",
      price: 349.99,
      stock_quantity: 25,
      is_featured: false,
      is_trending: false,
    },
    "DJI Osmo Pocket 3": {
      description:
        "A portable 3-axis gimbal camera that delivers smooth, stabilized footage and high-quality photos.",
      price: 349.99,
      stock_quantity: 20,
      is_featured: true,
      is_trending: true,
    },
    "ElectroHub special camera": {
      description:
        "A unique and innovative camera with special features and capabilities.",
      price: 999.99,
      stock_quantity: 5,
      is_featured: true,
      is_trending: false,
    },
    "Fujifilm X100T 16 MP Digital Camera (Silver)": {
      description:
        "A premium compact camera with a fixed lens and exceptional image quality, favored by photographers who appreciate a classic design.",
      price: 1299.99,
      stock_quantity: 8,
      is_featured: true,
      is_trending: true,
    },
    "Fujifilm X-T30 II Body - Silver": {
      description:
        "A versatile mirrorless camera with a high-resolution sensor and fast autofocus, offering excellent image quality and video capabilities.",
      price: 1099.99,
      stock_quantity: 12,
      is_featured: false,
      is_trending: true,
    },
    "GoPro HERO12 Black": {
      description:
        "A rugged and waterproof action camera that captures stunning 5.3K video and high-resolution photos, perfect for adventure enthusiasts.",
      price: 499.99,
      stock_quantity: 30,
      is_featured: true,
      is_trending: true,
    },
    "Nikon D780": {
      description:
        "A high-performance DSLR camera with a full-frame sensor and fast autofocus, offering exceptional image quality and versatility.",
      price: 1999.99,
      stock_quantity: 7,
      is_featured: true,
      is_trending: false,
    },
    "Nikon Z50 Body Mirrorless Camera": {
      description:
        "A compact and lightweight mirrorless camera with a powerful sensor and advanced features, ideal for content creators and enthusiasts.",
      price: 899.99,
      stock_quantity: 15,
      is_featured: false,
      is_trending: true,
    },
    "Panasonic LUMIX S5 Full Frame Mirrorless Camera": {
      description:
        "A versatile full-frame mirrorless camera with excellent video capabilities and a robust build, suitable for both photography and videography.",
      price: 1799.99,
      stock_quantity: 8,
      is_featured: true,
      is_trending: false,
    },
    samsung_gear_camera: {
      description:
        "A compact and versatile camera with a wide-angle lens and Wi-Fi connectivity, perfect for capturing memories on the go.",
      price: 299.99,
      stock_quantity: 25,
      is_featured: false,
      is_trending: false,
    },
    "Sony Alpha a7II Mirrorless Digital Camera": {
      description:
        "A full-frame mirrorless camera with excellent low-light performance and advanced features, ideal for professional photographers.",
      price: 1499.99,
      stock_quantity: 10,
      is_featured: true,
      is_trending: true,
    },
    "Sony RX100VA": {
      description:
        "A compact and powerful point-and-shoot camera with a large sensor and fast lens, perfect for capturing stunning photos and videos.",
      price: 799.99,
      stock_quantity: 18,
      is_featured: false,
      is_trending: true,
    },
  },
  Gaming: {
    "Razer Universal Quick Charging Stand for Xbox Series X": {
      description:
        "A convenient charging stand for your Xbox Series X controller, keeping it powered and ready to play.",
      price: 29.99,
      stock_quantity: 75,
      is_featured: false,
      is_trending: true,
    },
    "Sony PlayStation DualSense Wireless Controller Midnight Black for PlayStation 5":
      {
        description:
          "An innovative wireless controller with haptic feedback and adaptive triggers for immersive gaming experiences on PlayStation 5.",
        price: 69.99,
        stock_quantity: 45,
        is_featured: true,
        is_trending: true,
      },
    "Xbox Elite Series 2 Core Wireless Gaming Controller White Xbox Series X": {
      description:
        "A high-performance wireless controller with customizable button mapping, adjustable thumbsticks, and a sleek white design.",
      price: 129.99,
      stock_quantity: 25,
      is_featured: true,
      is_trending: false,
    },
    "Xbox One s": {
      description:
        "A compact and affordable gaming console with 4K Blu-ray playback capabilities.",
      price: 249.99,
      stock_quantity: 15,
      is_featured: false,
      is_trending: true,
    },
    "Xbox Series X_S": {
      description:
        "The latest generation of Xbox consoles, offering powerful performance and next-gen gaming experiences.",
      price: 499.99,
      stock_quantity: 20,
      is_featured: true,
      is_trending: true,
    },
    Xbox_series_s: {
      description:
        "A smaller and more affordable version of the Xbox Series X, delivering impressive gaming performance in a compact design.",
      price: 299.99,
      stock_quantity: 30,
      is_featured: false,
      is_trending: true,
    },
    "Hyperkin X91 Wired Controller for Xbox Series X": {
      description:
        "A wired controller for Xbox Series X, offering a classic design and reliable performance.",
      price: 29.99,
      stock_quantity: 40,
      is_featured: false,
      is_trending: false,
    },
    "Nintendo Switch 2 console": {
      description:
        "The next-generation Nintendo Switch console, promising enhanced performance and new features.",
      price: 399.99,
      stock_quantity: 10,
      is_featured: true,
      is_trending: true,
    },
    "Nintendo Switch Lite": {
      description:
        "A portable-only version of the Nintendo Switch, perfect for gaming on the go.",
      price: 199.99,
      stock_quantity: 35,
      is_featured: false,
      is_trending: true,
    },
    "Nintendo Switch": {
      description:
        "A hybrid console that can be played on your TV or as a handheld device, offering a wide range of gaming experiences.",
      price: 299.99,
      stock_quantity: 25,
      is_featured: true,
      is_trending: false,
    },
    "PDP Gaming Enhanced Xbox Series X_S Controller": {
      description:
        "An enhanced controller for Xbox Series X|S, featuring customizable button mapping, textured grips, and a comfortable design.",
      price: 49.99,
      stock_quantity: 30,
      is_featured: false,
      is_trending: false,
    },
    "PDP Victrix Pro BFG Wireless Gaming Controller for Playstation 5": {
      description:
        "A high-performance wireless controller for PlayStation 5, designed for competitive gaming with customizable buttons and a durable build.",
      price: 179.99,
      stock_quantity: 15,
      is_featured: true,
      is_trending: true,
    },
    "PDP VICTRIX PRO BGF Xbox Series X_S controler": {
      description:
        "A high-performance wireless controller for Xbox Series X|S, designed for competitive gaming with customizable buttons and a durable build.",
      price: 179.99,
      stock_quantity: 15,
      is_featured: true,
      is_trending: false,
    },
    "PlayStation 4 Slim": {
      description:
        "A slimmer and quieter version of the PlayStation 4 console, offering a wide range of gaming experiences.",
      price: 299.99,
      stock_quantity: 20,
      is_featured: false,
      is_trending: true,
    },
    "PlayStation 5 digital Edition Slim": {
      description:
        "A digital-only version of the PlayStation 5 console, offering a slimmer design and powerful performance.",
      price: 399.99,
      stock_quantity: 15,
      is_featured: true,
      is_trending: true,
    },
  },
  Laptops: {
    "HP_Spectre_x360_13.5_Touchscreen": {
      description:
        "A sleek and versatile 2-in-1 laptop with a 360-degree hinge, perfect for work and play.",
      price: 1299.99,
      stock_quantity: 25,
      is_featured: true,
      is_trending: true,
    },
    "HP_Envy_2-in-1_touchScreen": {
      description:
        "A stylish and powerful 2-in-1 laptop with a touch screen, ideal for creative professionals and students.",
      price: 999.99,
      stock_quantity: 20,
      is_featured: true,
      is_trending: false,
    },
    Lenovo_ThinkPad_E16_Business_Laptop: {
      description:
        "A reliable and durable business laptop with a large 16-inch display and powerful performance.",
      price: 799.99,
      stock_quantity: 25,
      is_featured: false,
      is_trending: true,
    },
    Lenovo_2022_Newest_Ideapad_3_Laptop: {
      description:
        "An affordable and reliable laptop for everyday computing tasks.",
      price: 399.99,
      stock_quantity: 40,
      is_featured: false,
      is_trending: false,
    },
    "Lenovo_ThinkPad_X1_Titanium_Yoga_2-in-1_Business_Laptop": {
      description:
        "A premium 2-in-1 business laptop with a sleek design and powerful performance.",
      price: 1999.99,
      stock_quantity: 10,
      is_featured: true,
      is_trending: true,
    },
    "Microsoft Surface Laptop (2024), Windows 11 Copilot+ PC, 15 Touchscreen": {
      description:
        "A stylish and powerful laptop with a large touchscreen and the latest Windows 11 features.",
      price: 1499.99,
      stock_quantity: 15,
      is_featured: true,
      is_trending: true,
    },
    "Razer Blade 16 (2024) Gaming Laptop": {
      description:
        "A high-performance gaming laptop with a powerful processor and graphics card, perfect for gamers and content creators.",
      price: 2999.99,
      stock_quantity: 8,
      is_featured: true,
      is_trending: false,
    },
    "MSI GS66 Stealth GS66 Stealth 11UG-658 15.6 Gaming Notebook": {
      description:
        "A sleek and powerful gaming laptop with a high-refresh-rate display and fast performance.",
      price: 1999.99,
      stock_quantity: 12,
      is_featured: true,
      is_trending: true,
    },
    "MSI Raider GE76 Gaming Laptop": {
      description:
        "A powerful gaming laptop with a high-performance processor and graphics card, designed for serious gamers.",
      price: 2499.99,
      stock_quantity: 10,
      is_featured: true,
      is_trending: false,
    },
    "Huawei MateBook X Pro Laptop": {
      description:
        "A premium laptop with a stunning display, powerful performance, and long battery life.",
      price: 1499.99,
      stock_quantity: 15,
      is_featured: true,
      is_trending: true,
    },
    "ASUS 2023 Vivobook 14 Laptop, 14 FHD": {
      description:
        "A budget-friendly laptop with a stylish design and decent performance for everyday tasks.",
      price: 499.99,
      stock_quantity: 40,
      is_featured: false,
      is_trending: false,
    },
    "Dell 2024 XPS 15 9530 Business Laptop": {
      description:
        "A powerful business laptop with a stunning display and long battery life.",
      price: 1699.99,
      stock_quantity: 30,
      is_featured: true,
      is_trending: true,
    },
    "Dell XPS 13 9310 Touchscreen": {
      description:
        "A sleek and portable laptop with a beautiful touchscreen display and excellent performance.",
      price: 1199.99,
      stock_quantity: 35,
      is_featured: true,
      is_trending: false,
    },
    "Dell Inspiron 3511 Laptop": {
      description:
        "An affordable and reliable laptop for everyday computing tasks.",
      price: 449.99,
      stock_quantity: 45,
      is_featured: false,
      is_trending: false,
    },
    "Dell Latitude 5530 Business Laptop": {
      description:
        "A durable and business-ready laptop with a range of security features and performance capabilities.",
      price: 1099.99,
      stock_quantity: 25,
      is_featured: false,
      is_trending: true,
    },
    "ASUS ZenBook Duo UX481": {
      description:
        "A unique laptop with a dual-screen design, perfect for multitasking and creative work.",
      price: 1499.99,
      stock_quantity: 20,
      is_featured: true,
      is_trending: true,
    },
    "Acer Aspire 1 A115-32-C96U": {
      description:
        "A budget-friendly laptop for students and home users, offering basic computing capabilities.",
      price: 299.99,
      stock_quantity: 50,
      is_featured: false,
      is_trending: false,
    },
    "Acer Swift 3 SF314-43-R6NE": {
      description:
        "A lightweight and portable laptop with a stylish design and decent performance.",
      price: 699.99,
      stock_quantity: 30,
      is_featured: false,
      is_trending: true,
    },
    "Apple 2024 MacBook Air 13-inch": {
      description:
        "A powerful and stylish laptop with a long battery life and impressive performance.",
      price: 1299.99,
      stock_quantity: 40,
      is_featured: true,
      is_trending: true,
    },
    "Apple Mac Pro 16.2": {
      description:
        "A high-performance desktop computer designed for professionals and creative individuals.",
      price: 5999.99,
      stock_quantity: 10,
      is_featured: true,
      is_trending: false,
    },
    "Xiaomi NoteBook Pro": {
      description:
        "A powerful and affordable laptop with a sleek design and impressive performance.",
      price: 799.99,
      stock_quantity: 35,
      is_featured: false,
      is_trending: true,
    },
  },
  SmartPhones: {
    "Samsung Galaxy Tab S9 Ultra": {
      description:
        "A high-end Android tablet with a stunning display and powerful performance.",
      price: 1099.99,
      stock_quantity: 30,
      is_featured: true,
      is_trending: true,
    },
    "Xiaomi Pad 6S Pro": {
      description:
        "A premium Android tablet with a vibrant display and excellent performance for productivity and entertainment.",
      price: 399.99,
      stock_quantity: 25,
      is_featured: false,
      is_trending: true,
    },
    "Xiaomi Poco F5 Pro 5G": {
      description:
        "A powerful mid-range smartphone with a high refresh rate display and impressive performance.",
      price: 499.99,
      stock_quantity: 40,
      is_featured: true,
      is_trending: false,
    },
    "Samsung Galaxy Tab A9": {
      description:
        "A budget-friendly Android tablet with a large display and decent performance for basic tasks.",
      price: 249.99,
      stock_quantity: 35,
      is_featured: false,
      is_trending: false,
    },
    "Xiaomi Poco C55": {
      description:
        "An affordable smartphone with a large battery and basic features.",
      price: 149.99,
      stock_quantity: 50,
      is_featured: false,
      is_trending: true,
    },
    "Samsung Galaxy S23 Plus": {
      description:
        "A premium flagship smartphone with a powerful camera system and stunning display.",
      price: 999.99,
      stock_quantity: 30,
      is_featured: true,
      is_trending: true,
    },
    "Huawei MatePad Pro 10.8": {
      description:
        "A high-end Android tablet with a vibrant display and powerful performance.",
      price: 599.99,
      stock_quantity: 25,
      is_featured: true,
      is_trending: false,
    },
    "Apple iPhone 15 Pro Max": {
      description:
        "Apple's latest flagship smartphone, featuring a powerful processor, advanced camera system, and durable design.",
      price: 1099.99,
      stock_quantity: 35,
      is_featured: true,
      is_trending: true,
    },
    "Samsung Galaxy A25 5G": {
      description:
        "A budget-friendly 5G smartphone with a large display and decent performance.",
      price: 249.99,
      stock_quantity: 45,
      is_featured: false,
      is_trending: true,
    },
    "Google Pixel Tablet": {
      description:
        "A versatile tablet with a vibrant display and powerful performance, perfect for work and play.",
      price: 499.99,
      stock_quantity: 30,
      is_featured: true,
      is_trending: false,
    },
    "Huawei Nova 11 Pro": {
      description:
        "A stylish smartphone with a powerful camera system and fast charging capabilities.",
      price: 599.99,
      stock_quantity: 25,
      is_featured: false,
      is_trending: true,
    },
    "Huawei MediaPad M6": {
      description:
        "A high-quality Android tablet with a stunning display and immersive sound.",
      price: 399.99,
      stock_quantity: 35,
      is_featured: false,
      is_trending: false,
    },
    "Huawei Mate 60 Pro": {
      description:
        "A high-end Android smartphone with advanced features and a powerful processor.",
      price: 1199.99,
      stock_quantity: 20,
      is_featured: true,
      is_trending: true,
    },
    "Huawei Nova 9": {
      description:
        "A mid-range smartphone with a stylish design and decent performance.",
      price: 399.99,
      stock_quantity: 40,
      is_featured: false,
      is_trending: false,
    },
    "Apple iPad Mini A15 Bionic": {
      description:
        "A compact and portable tablet with a powerful processor and stunning display.",
      price: 499.99,
      stock_quantity: 30,
      is_featured: true,
      is_trending: true,
    },
    "Apple iPad Pro 13-Inch": {
      description:
        "A high-performance tablet with a stunning display and powerful processor, perfect for creative professionals.",
      price: 799.99,
      stock_quantity: 25,
      is_featured: true,
      is_trending: false,
    },
    "Samsung Galaxy Z Fold5 AI": {
      description:
        "A foldable smartphone with a large and flexible display, offering a unique user experience.",
      price: 1799.99,
      stock_quantity: 15,
      is_featured: true,
      is_trending: true,
    },
    "Apple iPad Air 11-inch": {
      description:
        "A powerful and versatile tablet with a stunning display and long battery life.",
      price: 599.99,
      stock_quantity: 35,
      is_featured: false,
      is_trending: true,
    },
    "Google Pixel 8 Pro": {
      description:
        "A high-end Android smartphone with a powerful camera system and advanced features.",
      price: 999.99,
      stock_quantity: 30,
      is_featured: true,
      is_trending: true,
    },
    "Google Pixel 9 Pro XL": {
      description:
        "A premium Android smartphone with a large display and powerful performance.",
      price: 899.99,
      stock_quantity: 25,
      is_featured: true,
      is_trending: false,
    },
    "Samsung Galaxy S24 Ultra": {
      description:
        "A high-end Android smartphone with a powerful camera system and stunning display.",
      price: 1199.99,
      stock_quantity: 20,
      is_featured: true,
      is_trending: true,
    },
    "Apple iPhone 16 Pro Max Desert Titanium": {
      description:
        "Apple's latest flagship smartphone with a powerful processor, advanced camera system, and durable design.",
      price: 1299.99,
      stock_quantity: 15,
      is_featured: true,
      is_trending: true,
    },
    "Apple iPhone 14 Pro Max": {
      description:
        "A powerful smartphone with a stunning display, advanced camera system, and durable design.",
      price: 999.99,
      stock_quantity: 30,
      is_featured: false,
      is_trending: true,
    },
    "Xiaomi Poco M6 Pro 4G": {
      description:
        "An affordable smartphone with a large display and decent performance.",
      price: 199.99,
      stock_quantity: 45,
      is_featured: false,
      is_trending: false,
    },
    "Xiaomi Poco X6 Pro 5G": {
      description:
        "A mid-range 5G smartphone with a powerful processor and a high refresh rate display.",
      price: 299.99,
      stock_quantity: 40,
      is_featured: false,
      is_trending: true,
    },
  },
};

// Function to clean up product names
function cleanProductName(name) {
  // Remove underscores and hyphens, replace with spaces
  let cleaned = name.replace(/[_-]/g, " ");

  // Split into words
  let words = cleaned.split(" ");

  // If name is too long (more than 5 words), take first 5 words
  if (words.length > 5) {
    words = words.slice(0, 5);
  }

  // Join words back together
  cleaned = words.join(" ");

  // Capitalize first letter of each word
  cleaned = cleaned
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return cleaned;
}

function getProductImages(baseDir) {
  try {
    if (!fs.existsSync(baseDir)) {
      throw new Error(`Directory does not exist: ${baseDir}`);
    }

    const productImages = {};
    const categoryDirs = fs.readdirSync(baseDir);

    categoryDirs.forEach((category) => {
      const categoryPath = path.join(baseDir, category);

      if (fs.statSync(categoryPath).isDirectory()) {
        const images = fs
          .readdirSync(categoryPath)
          .filter((file) => {
            const ext = path.extname(file).toLowerCase();
            return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext);
          })
          .map((file) => {
            const rawProductName = path.parse(file).name;
            const productName = cleanProductName(rawProductName);
            const productInfo = productData[category]?.[productName] || {
              description: "No description available",
              price: 0,
              stock_quantity: 0,
              is_featured: false,
              is_trending: false,
            };

            // Create a path that works with Vite/React's asset handling
            const imagePath =
              `/src/assets/products image/${category}/${file}`.replace(
                /\\/g,
                "/"
              );

            return {
              product_id: 0, // Will be set later
              name: productName,
              description: productInfo.description,
              price: productInfo.price,
              stock_quantity: productInfo.stock_quantity,
              category_id: getCategoryId(category),
              image_url: imagePath,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              is_featured: productInfo.is_featured,
              is_trending: productInfo.is_trending,
              category: category,
              company: productName.split(" ")[0], // First word as company name
            };
          });

        productImages[category] = images;
      }
    });

    return productImages;
  } catch (error) {
    console.error("Error reading product images:", error.message);
    return {};
  }
}

function getCategoryId(category) {
  const categoryMap = {
    Accessories: 4,
    Cameras: 5,
    Gaming: 3,
    Laptops: 2,
    SmartPhones: 1,
  };
  return categoryMap[category] || 999; // 999 for uncategorized
}

// Example usage:
const productImageDir = path.join(
  __dirname,
  "../frontend/src/assets/products image"
);
console.log("Looking for images in:", productImageDir);

try {
  const allProductImages = getProductImages(productImageDir);

  // Flatten the object into an array of products
  const products = Object.values(allProductImages).flat();

  // Add sequential product IDs
  products.forEach((product, index) => {
    product.product_id = index + 1;
  });

  // Save to JSON file
  const outputPath = path.join(__dirname, "products.json");
  fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
  console.log("Successfully saved products to:", outputPath);
} catch (error) {
  console.error("Failed to process images:", error.message);
}
