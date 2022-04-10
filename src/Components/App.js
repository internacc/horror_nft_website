import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '../styles/App.css';
import Mainpg from './mainpage';
import Mint from './minting';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Foot from './foot';
  

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Mainpg/>} />
        
        <Route exact path="/mint" element={<Mint/>} />
        
        <Route exact path="/footer" element={<Foot/>} />
      </Routes>
    </Router>
  );
}

export default App;
