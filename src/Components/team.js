import Crew from "./crew";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Team = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return ( 
        <div className="container" data-aos="fade down" data-aos-duration="12000">
            <h1 style={{color: '#FFA900', fontSize: '3rem'}}>THE CREW</h1>
            <Crew />
        </div>
     );
}
 
export default Team;