import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";

// import Products from "./pages/Products";
function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
