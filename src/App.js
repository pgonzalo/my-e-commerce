import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "./components/Context/CartContext";


// VIEWS
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Home from "./components/Home/Home";
import Shopping from "./components/Shopping/Shopping";
import Error from "./components/Error/Error";
import FormComponent from "./components/FormComponent/FormComponent";
// CATEGORIES
import ItemCategory from "./components/ItemCategory/ItemCategory";




const App = () => {
  return (
    <CartProvider>
      <Router>
        
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={ <Home /> } />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/category/:category" element={<ItemCategory />} />
          <Route path="/cart" element={<FormComponent />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="*" element={ <Error /> } />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
