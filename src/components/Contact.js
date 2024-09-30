import React from "react";
import person from "../icons/person.png";
import person2 from "../icons/person2.jpg";
import tech_support from "../icons/tech_support.png";
import company_helpdesk2 from "../icons/company_helpdesk2.png";
import report_incident2 from "../icons/report_incident2.png";
import hr_concerns from "../icons/hr_concerns.png";
import { useTranslation, Trans } from "react-i18next";
import { useLang } from "../contexts/LangContext";
import logo from "../icons/Alesta_Logo-removebg-preview.png"

import "../styles/Contact.css";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const { contextLang } = useLang();

  return (
    <section id="contact">
      <div className="container">
        <div className="left-side">
          <h1
            className={
              contextLang === "tr" ? "header-size-tr" : "header-size-en"
            }
          >
            <Trans i18nKey="contact" components={{ br: <br /> }} />
          </h1>

          <div className="contact-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffb923"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
              />
            </svg>
            <div className="contact-info">
              <p
                style={{
                  fontFamily: "Helvetica Neue",
                  fontSize: 21,
                  fontWeight: "normal",
                  marginBottom: 10,
                }}
              >
                info@alestainnovation.com
              </p>
            </div>
          </div>

          <div id="address" className="contact-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffb923"
                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
              />
            </svg>
            <div className="contact-info">
              <p
                style={{
                  fontFamily: "Helvetica Neue",
                  fontSize: 21,
                  fontWeight: "normal",
                  marginBottom: 10,
                }}
              >
                Çağış Mah. Çağış 15 Sok. No: 2/24 <br />  Balıkesir Üniversitesi
                Teknokent <br />  Bigadiç/Balıkesir, TÜRKİYE
              </p>
            </div>
          </div>
        </div>

        <div className="right-side">
          <img src={person2} alt="Deneme" />
        </div>
      </div>
      <div className="logoDivGeneral">
        <img className="logoAlesta" src={logo}/>
        <p>© 2024 Alesta. Tüm hakları saklıdır.</p>
       </div>
    </section>
        
  );
};

export default Contact;
