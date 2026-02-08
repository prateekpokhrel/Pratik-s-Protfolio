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
  { title:"Web Development Internship", img:Cert11, desc:"3 months Web Dev Intern.", link:"https://drive.google.com/file/d/1O6ZEUU19rVeiVi-inIVnnY9BBuSlmqo5/view?usp=drive_link", tag:"Internship"},
  { title:"HackerRank Frontend (React)", img:Cert12, desc:"React certification.", link:"https://drive.google.com/file/d/18b5ujD9CvWNI4HiRPlzfsFRTS2VaNmvS/view?usp=drive_link", tag:"Certification"},
  { title:"MLH Mini Hackathon", img:Cert13, desc:"AI Smart City Solver.", link:"https://drive.google.com/file/d/1jVUVvhRDSq0UnOilW2-028loBK7hz7Du/view", tag:"Hackathon"},
  { title:"Core Java Developer", img:Cert1, desc:"Core Java + OOP.", link:"https://drive.google.com/file/d/1H5pLa5NJjMor9vFZ2DBqo154SSX5d4Xq/view", tag:"Course"},
  { title:"AWS Cloud Fundamentals", img:Cert2, desc:"AWS Academy.", link:"https://www.credly.com", tag:"Course"},
  { title:"SQL Certification", img:Cert7, desc:"SQL skills.", link:"https://www.hackerrank.com", tag:"Certification"},
  { title:"React Hooks", img:Cert9, desc:"Hooks mastery.", link:"https://quiz.greatstack.dev", tag:"Course"},
  { title:"Agentic AI Workshop", img:Cert4, desc:"UiPath AI.", link:"https://drive.google.com", tag:"Workshop"},
  { title:"Generative AI", img:Cert3, desc:"AI chatbot.", link:"https://www.ccbp.in", tag:"Workshop"},
  { title:"Problem Solving", img:Cert8, desc:"Algo skills.", link:"https://www.hackerrank.com", tag:"Certification"},
  { title:"Cybersecurity AI", img:Cert5, desc:"AI + Security.", link:"https://drive.google.com", tag:"Workshop"},
  { title:"HTML CSS Bootcamp", img:Cert6, desc:"Responsive UI.", link:"https://drive.google.com", tag:"Course"},
  { title:"Tech Fellowship", img:Cert10, desc:"Top 4k.", link:"https://drive.google.com", tag:"Achievement"}
];

const Certificates = () => {

  const [search,setSearch] = useState('');
  const [filter,setFilter] = useState('All');
  const [sort,setSort] = useState('views');
  const [views,setViews] = useState({});

  /* load views */
  useEffect(()=>{
    const v={};
    certData.forEach(c=>{
      v[c.title]=Number(localStorage.getItem('certViews_'+c.title))||0;
    });
    setViews(v);
  },[]);

  const addView=(title)=>{
    const k='certViews_'+title;
    const n=(Number(localStorage.getItem(k))||0)+1;
    localStorage.setItem(k,n);
    setViews(p=>({...p,[title]:n}));
  };

  const copyLink=(link)=>{
    navigator.clipboard.writeText(link);
  };

  const cats=['All',...new Set(certData.map(c=>c.tag))];

  const filtered = useMemo(()=>{
    let d = certData.filter(c=>c.title.toLowerCase().includes(search.toLowerCase()));
    if(filter!=='All') d=d.filter(c=>c.tag===filter);

    if(sort==='views') d=[...d].sort((a,b)=>(views[b.title]||0)-(views[a.title]||0));
    if(sort==='az') d=[...d].sort((a,b)=>a.title.localeCompare(b.title));

    return d;
  },[search,filter,sort,views]);

//   const top3 = [...certData]
//     .sort((a,b)=>(views[b.title]||0)-(views[a.title]||0))
//     .slice(0,3);

  return (
    <section id="certificates">
      <span className="certificatesTitle">CERTIFICATES</span>
     

      {/* controls */}
      <div className="certControls">
        <input placeholder="Search...                                                                                                                    🔍︎" value={search} onChange={e=>setSearch(e.target.value)} />
        <select onChange={e=>setFilter(e.target.value)}>
          {cats.map(c=><option key={c}>{c}</option>)}
        </select>
        <select onChange={e=>setSort(e.target.value)}>
          <option value="views">Most Viewed</option>
          <option value="az">A-Z</option>
        </select>
      </div>

{/* buttons */}
      <div className="certificatesBars">
        {filtered.map(cert=>(
          <div className="certificatesBar reveal" key={cert.title}>

            {(views[cert.title]||0)>=5 && (
              <div className="certTopBadge">TOP</div>
            )}

            <div className="certViewBadge">👁️ {views[cert.title]||0}</div>

            <img loading="lazy" src={cert.img} alt={cert.title}
                 className="certificatesBarImg"/>

            <div className="certificatesBarText">
              <h2>{cert.title}</h2>
              <p>{cert.desc}</p>


              <a href={cert.link} target="_blank" rel="noreferrer"
                 className="projectLink"
                 onClick={()=>addView(cert.title)}>
                 View
              </a>

              <button className="projectLink"
                      onClick={()=>copyLink(cert.link)}>
                 Copy Link
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
