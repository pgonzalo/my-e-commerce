import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/NavBar.js";
import CarouselContainer from "./components/carousel/Carousel";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
//import { ItemDetail  } from "./components/ItemDetail/ItemDetail"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <Router>
      <>
        <CarouselContainer />
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetail />} />
          
        </Routes>
      </>
    </Router>
  );
}

export default App;
