import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import ProductPreView from "./pages/ProductPreView";
import SearchPage from "./pages/SearchPage";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import ShoppingCart from "./pages/ShoppingCart";

// import Products from "./pages/Products";
function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/ProductPreView/:productId" element={<ProductPreView />} />
      <Route path="/search/:s" element={<SearchPage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="ShoppingCart" element={<ShoppingCart/>} />
    </Routes>
  );
}

export default App;
