import { Link } from 'react-router-dom';
import '../styles/mainpg.css'
const Mainpg = () => {
    return ( 
        <div className="intro">
            <p>Deep in the Etherium Blockchain lies 
great evil..and it is coming out</p>
            <button><Link to="/mint">ENTER AT YOUR OWN RISK</Link></button>
        </div>
     );
}
 
export default Mainpg;