import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar.js";
import CarouselContainer from "./components/carousel/Carousel";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
//import { ItemDetail  } from "./components/ItemDetail/ItemDetail"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import CartWidget from "./components/CartWidget/CartWidget";
import { CartProvider } from "./components/Context/CartContext";
import Error from "./components/Error/Error";



const App = () => {
  return (
    <CartProvider>
      <Router>
        
        <NavBar />

        <Routes>
          <Route path="/" element={<><CarouselContainer /> <ItemListContainer greeting="Bienveido A Nativo"/></>} />
          <Route path="/home" element={<><CarouselContainer />  <ItemListContainer /> </> } />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/burgers" element={<ItemDetail />} />
          <Route path="/pizas" element={<ItemDetail />} />
          <Route path="/fried" element={<ItemDetail />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="*" element={ <Error /> } />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
