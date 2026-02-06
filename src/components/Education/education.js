import React from 'react';
import './education.css';
import { Element } from 'react-scroll';

const Education = () => {
    const educationData = [
        {
            id: "university",
            institution: "Kalinga Institute of Industrial Technology, Deemed to be University",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            duration: "2023 - 2027 (Expected)",
            description: "CGPA: 8.86 (up to 5th sem)"
        },
        {
            id: "higherSecondary",
            institution: "Sagarmatha Higher Secondary Boarding School",
            degree: "+2 Science",
            duration: "2019 - 2021",
            description: "GPA: 3.59 / 4.00"
        },
        {
            id: "secondarySchool",
            institution: "Sagarmatha Higher Secondary Boarding School",
            degree: "Upto 10th Standard",
            duration: "2006 - 2019",
            description: "GPA: 3.45 / 4.00"
        }
    ];

    return (
        <section id="education">
            <h1 className="educationTitle">My Education</h1>

            {/* Education Cards */}
            <div className="educationList">
                {educationData.map((edu) => (
                    <Element key={edu.id} name={edu.id} className="educationItem">
                        <h2 className="institution">{edu.institution}</h2>
                        <span className="degree">{edu.degree}</span>
                        <span className="duration">{edu.duration}</span>
                        <p className="description">{edu.description}</p>
                    </Element>
                ))}
            </div>
        </section>
    );
};

export default Education;


