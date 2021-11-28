import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/NavBar.js";
import CarouselContainer from "./components/carousel/Carousel";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <>
      <CarouselContainer />
      <NavBar />

      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
