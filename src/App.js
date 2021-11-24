import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar/NavBar.js";
import CarouselContainer from "./components/carousel/Carousel";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";


function App() {
  return (
    <>
      <CarouselContainer />
      <NavBar />
      
      <ItemListContainer greeting="Bienvenido a Nativo Padel Bar" />
      
      
      
    </>
  );
}

export default App;
