// src/components/Tools/Tools.js
import React from 'react';
import './tools.css';

// Tech & Tools Icons
import vscodeIcon from '../../assets/vscode.jpeg';
import gradleIcon from '../../assets/gra.png';
import langchainIcon from '../../assets/lang.jpg';
import playhtIcon from '../../assets/play.jpeg';
import githubIcon from '../../assets/github.jpg';
import huggingfaceIcon from '../../assets/hug.png';
import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css.png';
import javaIcon from '../../assets/java.png';
import sqlIcon from '../../assets/sql.png';
import pythonIcon from '../../assets/python.png';
import intellji from '../../assets/int.jpeg';
import c from '../../assets/c.png';

const Tools = () => {
    const tools = [
        { src: htmlIcon, alt: "HTML" },
        { src: cssIcon, alt: "CSS" },
        { src: javaIcon, alt: "Java" },
        { src: sqlIcon, alt: "SQL" },
        { src: pythonIcon, alt: "Python" },
        { src: c, alt: "C" },
        { src: vscodeIcon, alt: "VS Code" },
        { src: gradleIcon, alt: "Gradle" },
        { src: langchainIcon, alt: "LangChain" },
        { src: playhtIcon, alt: "PlayHT" },
        { src: githubIcon, alt: "GitHub" },
        { src: huggingfaceIcon, alt: "Hugging Face" },
        { src: intellji, alt: "IntelliJ" },
    ];

    return (
        <section id="tools">
            <h1 className="toolsTitle">My Tools & Tech Stack</h1>
            <p className="toolsDesc">I have mastered these technologies and tools:</p>
            <div className="toolsGrid">
                {tools.map((tool, index) => (
                    <div key={index} className="toolCard">
                        <img src={tool.src} alt={tool.alt} className="toolImg" />
                        <span className="toolLabel">{tool.alt}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tools;
