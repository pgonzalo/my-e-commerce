import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "./components/Context/CartContext";


// VIEWS
import ItemDetail from "./components/ItemDetail/ItemDetail";
import CartWidget from "./components/CartWidget/CartWidget";
import Home from "./components/Home/Home";
import Shopping from "./components/Shopping/Shopping";
import Error from "./components/Error/Error";

// CATEGORIES
import Burgers from "./components/Categories/Burgers/Burgers";
import Pizzas from "./components/Categories/Pizzas/Pizzas";
import Picar from "./components/Categories/Picar/Picar";



const App = () => {
  return (
    <CartProvider>
      <Router>
        
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={ <Home /> } />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/burgers" element={<Burgers />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/picar" element={<Picar />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="*" element={ <Error /> } />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
