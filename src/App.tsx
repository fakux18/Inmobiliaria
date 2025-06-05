import "./App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ProductDetails from "./pages/ProductDetails"
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/propiedad/:id" element={<ProductDetails/>}/>
    </Routes>
  );
}

export default App;
