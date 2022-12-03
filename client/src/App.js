import Categorie from "./components/Categorie";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SlideAccueil from "./components/slideAccueil";
import './styles/categorie.scss'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <SlideAccueil />
      <Categorie />
      <Footer/>
    </div>
  );
}
