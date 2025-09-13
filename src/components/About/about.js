import React from 'react';
import './about.css';
import UIDesign from '../../assets/ui-designs.png';
import WebDesign from '../../assets/web-designn.png';
import AppDesign from '../../assets/ai-design.png';

const About = () => {
    return (
        <section id="about">
            <span className="aboutTitle">What I do</span>
            <span className="aboutDesc">
                Skilled and passionate Java Full Stack Developer focused on building efficient, scalable web applications with clean code and great user experience.
            </span>
            <div className="aboutBars">
                <div className="aboutBar">
                    <img src={UIDesign} alt="Frontend Development" className="aboutBarImg" />
                    <div className="aboutBarText">
                        <h2>Frontend Development</h2>
                        <p>I have developed various projects related to UI and frontend development.</p>
                    </div>
                </div>

                <div className="aboutBar">
                    <img src={WebDesign} alt="Website Design" className="aboutBarImg" />
                    <div className="aboutBarText">
                        <h2>Website Design</h2>
                        <p>Made KIIT Calendar and a Personal Portfolio.</p>
                    </div>
                </div>

                <div className="aboutBar">
                    <img src={AppDesign} alt="AI Automation" className="aboutBarImg" />
                    <div className="aboutBarText">
                        <h2>AI Automation</h2>
                        <p>Developed a chatbot like Google Gemini and an AI automated mail shortlister to save recruiters valuable time.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
