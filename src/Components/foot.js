import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Footer from "./footer";
import '../styles/footer.css'
const Foot = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return ( <div className="footer_sec" data-aos="fade-left" data-aos-duration="12000">
        <Footer />
    </div>
         );
}
 
export default Foot;