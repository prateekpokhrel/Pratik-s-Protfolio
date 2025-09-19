import React from 'react';
import './certificates.css';
import Cert1 from '../../assets/java-cert.png';
import Cert2 from '../../assets/cloud-cert.png';
import Cert3 from '../../assets/gen-ai.png';
import Cert4 from '../../assets/agentic-ai.png';
import Cert5 from '../../assets/icidict.png';
import Cert6 from '../../assets/html-css.png';
import Cert7 from '../../assets/hacker-rank-sql.png';
import Cert8 from '../../assets/hacker-rank-problem-solving.png';
import Cert9 from '../../assets/react-hooks.png';
import Cert10 from '../../assets/algo.png';
const Certificates = () => {
    return (
        <section id="certificates">
            <span className="certificatesTitle">CERTIFICATES</span>
            <span className="certificatesDesc">
                Aspiring Java Full Stack Developer currently undergoing industry-recognized training with hands-on project experience. 
                Below are my certifications showcasing technical expertise and continuous learning.
            </span>

            <div className="certificatesBars">

                <div className="certificatesBar">
                    <img src={Cert1} alt="Core Java Certificate" className="certificatesBarImg" />
                    <div className="certificatesBarText">
                        <h2>Core Java Developer</h2>
                        <p>
                            Completed a comprehensive core Java course covering OOPs, Collections, JDBC, and multithreading.
                            Included real-world capstone projects.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1H5pLa5NJjMor9vFZ2DBqo154SSX5d4Xq/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

                <div className="certificatesBar">
                    <img src={Cert2} alt="Cloud Computing Certificate" className="certificatesBarImg" />
                    <div className="certificatesBarText">
                        <h2>Cloud Computing Fundamentals</h2>
                        <p>
                            Completed AWS Academy course covering cloud infrastructure, deployment models, and DevOps principles.
                        </p>
                        <a
                            href="https://www.credly.com/badges/864b4f9b-1e44-462c-b60d-4c167b52af2b/linked_in_profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

                 <div className="certificatesBar">
                    <img src={Cert7} alt="HackerRank SQL Certificate" className="certificatesBarImg" />
                    <div className="certificatesBarText">
                        <h2>HackerRank SQL Certificate</h2>
                        <p>
                            Completed HackerRank’s SQL skills certification, demonstrating strong query writing and database management capabilities.
                        </p>
                        <a
                            href="https://www.hackerrank.com/certificates/iframe/77ccb928d068"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

                <div className="certificatesBar">
                    <img src={Cert9} alt="React Hooks Certificate" className="certificatesBarImg" />
                    <div className="certificatesBarText">
                        <h2>GreatStack: React Hooks Certification</h2>
                        <p>
                            Completed an in-depth course on React Hooks, focusing on state management, effects, and building functional React components.
                        </p>
                        <a
                            href="https://quiz.greatstack.dev/validate/rhkss7klTDweUOTfw6fJCcAFmbGfBoE3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

                 <div className="certificatesBar">
                    <img src={Cert4} alt="Agentic AI Workshop Certificate" className="certificatesBarImg" />
                    <div className="certificatesBarText">
                        <h2>Agentic AI Development Workshop</h2>
                        <p>
                            Completed a 7-day Agentic AI workshop conducted by UiPath, where I developed and deployed a <em>Resume Analyzer</em> AI automation project using autonomous agent principles.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1DEYo7Nyv1WBB-BlPcQSYOetjYKjr9lFa/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

                <div className="certificatesBar">
                    <img src={Cert3} alt="Generative AI Workshop Certificate" className="certificatesBarImg" />
                    <div className="certificatesBarText">
                        <h2>Generative AI Workshop</h2>
                        <p>
                            Completed a hands-on workshop on Generative AI conducted by NxtWave, where I built an AI chatbot project titled <em>The Aspiring Scientist Chatbot</em>.
                        </p>
                        <a
                            href="https://www.ccbp.in/ai-workshop-certificate?com=1740CY52LD?utm_source=whatsapp&utm_campaign=4.0-tribe-academy-ai-workshop-certificate&utm_medium=message"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

                <div className="certificatesBar">
                    <img src={Cert8} alt="HackerRank Problem Solving Certificate" className="certificatesBarImg" />
                    <div className="certificatesBarText">
                        <h2>HackerRank Problem Solving Certificate</h2>
                        <p>
                            Earned certification in problem-solving skills on HackerRank, showcasing algorithmic thinking and coding efficiency.
                        </p>
                        <a
                            href="https://www.hackerrank.com/certificates/iframe/403cc2038c98"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

                <div className="certificatesBar">
                    <img src={Cert5} alt="ICIDICT Gen-AI and Cybersecurity Workshop Certificate" className="certificatesBarImg" />
                    <div className="certificatesBarText">
                        <h2>ICIDICT-KIIT Gen-AI and Cybersecurity Workshop</h2>
                        <p>
                            Attended the ICIDICT-KIIT workshop on Generative AI and Cybersecurity, gaining insights into the intersection of AI technologies and secure computing systems.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1w82VkHVWEGehvJ3I0CwiRYHd46Lf9D0u/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

                <div className="certificatesBar">
                    <img src={Cert6} alt="HTML & CSS Bootcamp Certificate" className="certificatesBarImg" />
                    <div className="certificatesBarText">
                        <h2>HTML & CSS Bootcamp</h2>
                        <p>
                            Completed an intensive HTML5 & CSS3 Bootcamp from LetsUpgrade, including responsive design and accessibility best practices.
                            Deployed a live project: <em>KIIT Calendar</em>.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1UpHDZ3wRA83qJsWf6zuYFEZ2J9SV2UKM/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

               <div className="certificatesBar">
                    <img src={Cert10} alt="Algo University Tech Fellowship (2024)" className="certificatesBarImg" />
                    <div className="certificatesBarText">
                        <h2>Algo University Tech Fellowship (2024)</h2>
                        <p>
                            Shortlisted in the competitive Tech Fellowship exam, securing a seat among 4,000 selected from over 20,000 candidates.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1v24nAJlNKFOnbNuXlbw_YuMLbJJtiY_c/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projectLink"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certificates;
