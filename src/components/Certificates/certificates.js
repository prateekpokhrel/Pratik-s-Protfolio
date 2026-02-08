import React, { useMemo, useState, useEffect } from 'react';
import './certificates.css';

import Cert1 from '../../assets/elabs.jpg';
import Cert2 from '../../assets/aws.jpeg';
import Cert3 from '../../assets/nxtwave.jpg';
import Cert4 from '../../assets/uipath.png';
import Cert5 from '../../assets/icdcit.png';
import Cert6 from '../../assets/lets.jpeg';
import Cert7 from '../../assets/hak.png';
import Cert8 from '../../assets/hak.png';
import Cert9 from '../../assets/sta.jpg';
import Cert10 from '../../assets/algo.jpeg';
import Cert11 from '../../assets/vault.png';
import Cert12 from '../../assets/hak.png';
import Cert13 from '../../assets/ml.jpg';

const certData = [
  {
    title: "Web Development Internship",
    img: Cert11,
    desc: "Completed a 3 months internship as a Web Development Intern at VaultofCodes.",
    link: "https://drive.google.com/file/d/1O6ZEUU19rVeiVi-inIVnnY9BBuSlmqo5/view?usp=drive_link",
    tag: "Internship"
  },
  {
    title: "HackerRank Certified Frontend Developer (React)",
    img: Cert12,
    desc: "Succesfully completed HackerRank Frontend Developemnt exam using React and Javascript.",
    link: "https://drive.google.com/file/d/18b5ujD9CvWNI4HiRPlzfsFRTS2VaNmvS/view?usp=drive_link",
    tag: "Certification"
  },
  {
    title: "MLH Mini Hackathon",
    img: Cert13,
    desc: "Participated in MLH Mini Hackathon and built an AI Smart City Issue Solver.",
    link: "https://drive.google.com/file/d/1jVUVvhRDSq0UnOilW2-028loBK7hz7Du/view?usp=sharing",
    tag: "Hackathon"
  },
  {
    title: "Core Java Developer",
    img: Cert1,
    desc: "Core Java with OOP, Collections, JDBC, multithreading and projects.",
    link: "https://drive.google.com/file/d/1H5pLa5NJjMor9vFZ2DBqo154SSX5d4Xq/view",
    tag: "Course"
  },
  {
    title: "Cloud Computing Fundamentals",
    img: Cert2,
    desc: "AWS Academy cloud infrastructure and DevOps principles.",
    link: "https://www.credly.com/badges/864b4f9b-1e44-462c-b60d-4c167b52af2b/linked_in_profile",
    tag: "Course"
  },
  {
    title: "HackerRank SQL Certificate",
    img: Cert7,
    desc: "SQL certification showing strong database querying skills.",
    link: "https://www.hackerrank.com/certificates/iframe/77ccb928d068",
    tag: "Certification"
  },
  {
    title: "React Hooks Certification",
    img: Cert9,
    desc: "Deep React Hooks training and functional components.",
    link: "https://quiz.greatstack.dev/validate/rhkss7klTDweUOTfw6fJCcAFmbGfBoE3",
    tag: "Course"
  },
  {
    title: "Agentic AI Development Workshop",
    img: Cert4,
    desc: "UiPath Agentic AI workshop and Resume Analyzer project.",
    link: "https://drive.google.com/file/d/1DEYo7Nyv1WBB-BlPcQSYOetjYKjr9lFa/view?usp=drive_link",
    tag: "Workshop"
  },
  {
    title: "Generative AI Workshop",
    img: Cert3,
    desc: "Built AI chatbot in Generative AI workshop.",
    link: "https://www.ccbp.in/ai-workshop-certificate",
    tag: "Workshop"
  },
  {
    title: "Problem Solving Certificate",
    img: Cert8,
    desc: "Algorithmic problem solving certification.",
    link: "https://www.hackerrank.com/certificates/iframe/403cc2038c98",
    tag: "Certification"
  },
  {
    title: "ICIDICT Gen-AI & Cybersecurity",
    img: Cert5,
    desc: "Workshop on AI + cybersecurity systems.",
    link: "https://drive.google.com/file/d/1w82VkHVWEGehvJ3I0CwiRYHd46Lf9D0u/view",
    tag: "Workshop"
  },
  {
    title: "HTML & CSS Bootcamp",
    img: Cert6,
    desc: "Responsive design + accessibility training.",
    link: "https://drive.google.com/file/d/1UpHDZ3wRA83qJsWf6zuYFEZ2J9SV2UKM/view",
    tag: "Course"
  },
  {
    title: "Algo University Tech Fellowship",
    img: Cert10,
    desc: "Selected among 4,000 from 20,000 candidates.",
    link: "https://drive.google.com/file/d/1v24nAJlNKFOnbNuXlbw_YuMLbJJtiY_c/view",
    tag: "Achievement"
  }
];

const Certificates = () => {

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('az');
  const [preview, setPreview] = useState(null);

  const categories = ['All', ...new Set(certData.map(c => c.tag))];

  const filtered = useMemo(() => {
    let data = certData.filter(c =>
      c.title.toLowerCase().includes(search.toLowerCase())
    );

    if (filter !== 'All') data = data.filter(c => c.tag === filter);

    if (sort === 'az') data = [...data].sort((a,b)=>a.title.localeCompare(b.title));
    if (sort === 'za') data = [...data].sort((a,b)=>b.title.localeCompare(a.title));

    return data;
  }, [search, filter, sort]);

  useEffect(() => {
    const esc = e => e.key === 'Escape' && setPreview(null);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, []);

  const handleView = (title) => {
    const k = 'certViews_' + title;
    localStorage.setItem(k, (Number(localStorage.getItem(k)) || 0) + 1);
  };

  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
    alert("Link copied!");
  };

  return (
    <section id="certificates">
      <span className="certificatesTitle">CERTIFICATES</span>
      <span className="certificatesDesc">
        Industry certifications and technical achievements showcasing continuous learning.
      </span>

      {/* 🔍 Controls */}
      <div style={{marginBottom:20, display:'flex', gap:10, flexWrap:'wrap', justifyContent:'center'}}>
        <input
          placeholder="Search certificates..."
          value={search}
          onChange={e=>setSearch(e.target.value)}
          style={{padding:8, borderRadius:6}}
        />

        <select onChange={e=>setFilter(e.target.value)}>
          {categories.map(c=> <option key={c}>{c}</option>)}
        </select>

        <select onChange={e=>setSort(e.target.value)}>
          <option value="az">A–Z</option>
          <option value="za">Z–A</option>
        </select>
      </div>

      <div className="certificatesBars">
        {filtered.map(cert => (
          <div className="certificatesBar" key={cert.title}>
            <img loading="lazy" src={cert.img} alt={cert.title} className="certificatesBarImg" />

            <div className="certificatesBarText">
              <h2>{cert.title}</h2>
              <p>{cert.desc}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
                onClick={()=>handleView(cert.title)}
              >
                View Certificate
              </a>

              {/* ⭐ New buttons */}
              <button className="projectLink" onClick={()=>setPreview(cert)} style={{marginLeft:8}}>
                Preview
              </button>

              <button className="projectLink" onClick={()=>copyLink(cert.link)} style={{marginLeft:8}}>
                Copy Link
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔍 Modal Preview */}
      {preview && (
        <div style={{
          position:'fixed', inset:0, background:'rgba(0,0,0,.8)',
          display:'flex', alignItems:'center', justifyContent:'center',
          zIndex:9999
        }}
        onClick={()=>setPreview(null)}
        >
          <iframe
            src={preview.link}
            title="preview"
            style={{width:'90%', height:'90%', borderRadius:12, background:'#fff'}}
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
