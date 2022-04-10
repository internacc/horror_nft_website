import "../styles/motto.css";
import datas from "../jsondata/motto_data.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Motto = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    return (
        datas.map((data) => (
            <div className="container" key={data.id} data-aos="fade-down" data-aos-duration="12000" data-aos-easing="linear">
                <div className="phase">
                    <h2 style={{ color: '#ffffff'}}>Phase {data.id}</h2>
                </div>
                <div className="motto_title">
                    <h1>{data.title}</h1>
                    <p>{data.info}</p></div>
                <div className="motto_content">
                    <p>{data.motto}</p>
                </div>
            </div>

        ))

    );
}

export default Motto;