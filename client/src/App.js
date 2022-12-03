import Categorie from "./components/Categorie";
import NavBar from "./components/NavBar";
import SlideAccueil from "./components/slideAccueil";
import './styles/categorie.scss'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <SlideAccueil />
      <Categorie />
    </div>
  );
}
