import Home from "./pages/Home";
import { Routes , Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductPreView from "./pages/ProductPreView";
import SearchPage from "./pages/SearchPage";
import Register from "./pages/Register";

// import Products from "./pages/Products";
function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/ProductPreView/:productId" element={<ProductPreView />} />
      <Route path="/search/:s" element={<SearchPage />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default App;
