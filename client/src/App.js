import { UidContext } from './components/context/authContext';
import Routes from './components/Routes'
import './styles/categorie.scss'

export default function App() {

  const Uid = localStorage.getItem('uid')
  
  return (
    <div className="App">
      <UidContext.Provider value={Uid}>
      <Routes/>
      </UidContext.Provider>
    </div>
  );
}
