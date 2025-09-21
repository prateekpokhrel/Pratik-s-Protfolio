import React from 'react';
import './projects.css';
import Portfolio1 from '../../assets/calender-clone.png';
import Portfolio2 from '../../assets/ai-automation.png';
import Portfolio3 from '../../assets/portfolio.png';

const Projects = () => {
    return (
        <section id="projects">
            <span className="projectsTitle">PROJECTS</span>
            <span className="projectsDesc">
                Skilled and passionate Java Full Stack Developer with hands-on experience in real-world projects.
                Each project reflects my focus on clean code, scalability, and user-friendly design.
            </span>

            <div className="projectsBars">
                <div className="projectsBar">
                    <img src={Portfolio1} alt="Calendar Clone" className="projectsBarImg" />
                    <div className="projectsBarText">
                        <h2>KIIT Calendar Clone</h2>
                        <p>
                            A fully responsive calendar clone built using HTML, CSS, and JavaScript.
                            Deployed live for interactive use.
                        </p>
                        <a 
                            href="https://prateekpokhrel.github.io/calender_clone/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            View Project
                        </a>
                    </div>
                </div>

                <div className="projectsBar">
                    <img src={Portfolio2} alt="AI Automation" className="projectsBarImg" />
                    <div className="projectsBarText">
                        <h2>AI Chatbot & Automation</h2>
                        <p>
                            Built a chatbot like Google Gemini and an AI-powered mail shortlister 
                            that reduces recruiters’ time and effort.
                        </p>
                        <a 
                            href="https://huggingface.co/spaces/pratik03/aiergb" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            Try Demo
                        </a>
                    </div>
                </div>

                <div className="projectsBar">
                    <img src={Portfolio3} alt="Portfolio Website" className="projectsBarImg" />
                    <div className="projectsBarText">
                        <h2>Personal Portfolio</h2>
                        <p>
                            Designed and developed my personal portfolio website 
                            to showcase projects, skills, and achievements.
                        </p>
                        <a 
                            href="https://pratik-s-protfolio.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            Visit Site
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
