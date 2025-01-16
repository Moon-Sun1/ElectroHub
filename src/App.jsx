import "./index.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>

    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
