
import './App.css';

import Navbar from './Componet.jsx/Navbar';
import { AuthContext} from './context/AuthContext'
import Loginres from './Componet.jsx/Loginres';
import { useContext } from 'react';
function App() {
  const {isAuthorized} = useContext(AuthContext)
  return (
    <div className="App">
      <Navbar/>
      <div>{!isAuthorized?<h2>"Please Login!"</h2>:<Loginres/>}</div>
     
       
    </div>
  );
}

export default App;
