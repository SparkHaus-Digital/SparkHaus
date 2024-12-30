import React, {useEffect} from "react";
import '../css/Portfolio.css';
import es from '../assets/ES-Website-Element.webp';
import dob from '../assets/DoB-Website-Element.webp';

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h2>WE ARE STILL YOUNG <br />AND BUILDING</h2>
                <p>At Sparkhaus, every project is a step in our journey of growth and creativity. While we’re young, our passion and commitment drive us to deliver exceptional results. Explore our portfolio to see how we’ve turned ideas into impactful digital experiences - and know that we’re just getting started.</p>
            </div>
            <div className="portfolio-content">
                <div className="project-card">
                    <img src={dob} alt="Project Image 1" />
                    <div className="card-right">
                        <h3>DOCTOR OF BAT</h3>
                        <span>UI/UX Design | Development | Content Management</span>
                        c
                    </div>
                </div>

                <div className="project-card">
                    <img src={es} alt="Project Image 2" />
                    <div className="card-right">
                        <h3>DOCTOR OF BAT</h3>
                        <span>UI/UX Design | Development | Content Management</span>
                        <p>The client wanted to explore the digital landscape and establish a presence online without committing to an online shop just yet. We designed a simple yet functional website that effectively showcased their services and reflected their brand identity. It provided a solid foundation for them to engage with their audience and gain confidence in the web space.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;