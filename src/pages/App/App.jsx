import "./App.css";
import Home from "../Home";
import Signin from "../Signinn/Signin";
import { Routes, Route } from "react-router-dom";
import Products from "../Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/Signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
