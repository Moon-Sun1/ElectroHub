
import Footer from "./components/Footer"
import "./index.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
// import Products from "./pages/Products";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className=" h-[100vh] bg-body-background">
    <Nav/>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
    </Routes>
   </div>
   
  );
}

export default App;