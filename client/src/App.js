// import axios from 'axios';
// import { useEffect } from 'react';
import { UidContext } from './components/context/authContext';
import Routes from './components/Routes'
import './styles/categorie.scss'

export default function App() {

  // const Uid = localStorage.getItem('uid')
  const Token = localStorage.getItem('token')
  
  // useEffect(async() => {
  //   await axios ({
  //     method:"GET",
  //     url:""
  //   })
  // })
  
  return (
    <div className="App">
      <UidContext.Provider value={Token}>
      <Routes/>
      </UidContext.Provider>
    </div>
  );
}
