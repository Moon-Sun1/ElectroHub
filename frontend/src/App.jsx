import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import ProductPreView from "./pages/ProductPreView";
import SearchPage from "./pages/SearchPage";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import ShoppingCart from "./pages/ShoppingCart";
import AdminPanelLayout from "./adminView/components/layout/AdminPanelLayout";
import Authentication from "./adminView/pages/auth/authentication";
import Products from "../src/adminView/pages/products/Products";
import Order from "../src/adminView/pages/orders/Order";
import Customers from "../src/adminView/pages/customers/Customers";
import Dashboard from "../src/adminView/pages/dashboard/Dashboard";
import MangeAccount from "./pages/MangeAccount";
import AddProduct from "../src/adminView/pages/products/AddProduct";





// import Products from "./pages/Products";
function App() {
  return (
    <Routes>
      {/* USER VIEW */}
      <Route index path="/" element={<Home />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/ProductPreView/:productId" element={<ProductPreView />} />
      <Route path="/search/:s" element={<SearchPage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/ShoppingCart" element={<ShoppingCart/>} />
      <Route path="/MangeAccount" element={<MangeAccount/>} />
      {/* ADMIN VIEW */}
      <Route path="/admin" element={<AdminPanelLayout />} >
        <Route index element={<Navigate to="authentication" replace />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="products" element={<Products />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="orders" element={<Order />} />
        <Route path="customers" element={<Customers />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
