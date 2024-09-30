import React, { useContext } from "react";
import dart3 from "../icons/dart3.png";
import calendar2 from "../icons/calendar2.png";
import rocket3 from "../icons/rocket3.png";
import lamb from "../icons/lamb.png";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTranslation, Trans } from "react-i18next";
import "../styles/External.css";
import { DataContext } from "../contexts/DataContext";
import { useLang } from "../contexts/LangContext.js";

const External = () => {
  const { t } = useTranslation();
  const { contextLang } = useLang();

  return (
    <section id="external">
    <div>
      <h1 className="header-item">{t("external")}</h1>
      <div className={`image-grid ${contextLang === "tr" ? "tr" : "en"}`}>
        <div className="image-item">
          <img src={dart3} alt="Dart" />
          <div className="text-item">
            <p
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: "normal",
                fontSize: 21,
              }}
            >
              <Trans i18nKey="ondevApps" components={{ br: <br /> }} />
            </p>
          </div>
        </div>
        <div className="image-item">
          <img src={calendar2} alt="Calendar" />
          <div className="text-item">
            <p
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: "normal",
                fontSize: 21,
              }}
            >
              <Trans i18nKey="requestLeaves" components={{ br: <br /> }} />
            </p>
          </div>
        </div>
        <div className="image-item">
          <img src={rocket3} alt="Rocket" />
          <div className="text-item">
            <p
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: "normal",
                fontSize: 21,
              }}
            >
              <Trans i18nKey="employeeResource" components={{ br: <br /> }} />
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
export default External;
