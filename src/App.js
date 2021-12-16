import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/NavBar.js";
import CarouselContainer from "./components/carousel/Carousel";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
//import { ItemDetail  } from "./components/ItemDetail/ItemDetail"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import CartWidget from "./components/CartWidget/CartWidget";
import { CartProvider } from "./components/Context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <CarouselContainer />
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienveido A Nativo"/>} />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/burguers" element={<ItemDetail />} />
          <Route path="/pizas" element={<ItemDetail />} />
          <Route path="/fried" element={<ItemDetail />} />
          <Route path="/cart" element={<CartWidget />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
