import Home from "./pages/Home";
import { Routes , Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";

// import Products from "./pages/Products";
function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
