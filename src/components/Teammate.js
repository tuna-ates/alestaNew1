import React from "react";
import people1 from "../icons/people1.png";
import people2 from "../icons/people2.png";
import people3 from "../icons/people3.png";
import people4 from "../icons/people4.png";
import "../styles/Teammate.css";
import { useLang } from "../contexts/LangContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTranslation } from "react-i18next";

const Teammate = () => {
  // const [contextLang,setContextLang]=useLang();
  // const { t, i18n } = useTranslation();
  // const [lang, setLang] = useLocalStorage("lang");

  // const changeLang = () => {
  //   const newLang = lang === "tr" ? "en" : "tr";
  //   setLang(newLang);
  //   setContextLang(newLang);
  //   i18n.changeLanguage(newLang);
  // }; 

  return (
    <section id="teammate">
    <div  style={{ backgroundColor: '#ffb923', padding:'3rem' }}>
    <div style={{height:"10vh"}}>
               
               </div>
      <h1 className="header-item-teammate">Ekibimiz</h1>
      <div className="image-grid-teammate">
        <div className="image-item-teammate">
        <div className="deneme">
          <img src={people1} alt="Dart" />
          </div>
          <div className="text-item">
            <p className="team-item" >
            Semih Birincioğlu
            </p>
            <p className="item-team">Co-Founder</p>
          </div>
        </div>
        <div className="image-item-teammate">
        <div className="deneme">
          <img src={people1} alt="Dart" />
          </div>
          <div className="text-item">
            <p className="team-item"  >
            Hüseyin Doruk Tunca
            </p>
            <p className="item-team">Co-Founder</p>
            
          </div>
        </div>
        <div className="image-item-teammate">
          <div className="deneme">
          <img src={people1} alt="Dart" />
          </div>
          
          <div className="text-item">
            <p className="team-item" >
            Alperen Akgün
            </p>
            <p className="item-team">Software Engineer</p>
          </div>
        </div>
        <div className="image-item-teammate">
        <div className="deneme">
          <img src={people1} alt="Dart" />
          </div>
          <div className="text-item">
            <p className="team-item" >
            Süleyman Tunahan Ateş
            </p>
            <p className="item-team">Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Teammate;