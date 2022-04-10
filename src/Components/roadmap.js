import Motto from "./motto";
import '../styles/roadmap.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Roadmap = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return ( 
        <div className="roadmap" data-aos="fade up" data-aos-duration="12000">
            <h1 style={{color: '#FFA900', fontSize: '3rem'}}>ROADMAP</h1>
            <Motto />
        </div>
     );
}
export default Roadmap;