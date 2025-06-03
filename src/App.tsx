import "./App.css";
// import whatsappIcon from '../src/assets/images/whatsapp-social-media-svgrepo-com.svg'
// import Navbar from "./components/Navbar";
// import HouseCard from "./components/HouseCard";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
