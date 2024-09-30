import React, { useContext } from "react";
import client_list3 from "../icons/client_list3.png";
import marketing3 from "../icons/marketing3.png";
import newbies3 from "../icons/newbies3.png";
import lamb from "../icons/lamb.png";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTranslation, Trans } from "react-i18next";
import "../styles/Resource.css";
import { DataContext } from "../contexts/DataContext";
import { useLang } from "../contexts/LangContext.js";

const Resource = () => {
  const { t } = useTranslation();
  const { contextLang } = useLang();

  return (
    <section id="resource">
    <div className="resourceGeneral">
    <div style={{height:"10vh"}}>
               
               </div>
      <h1 className="header-item-resource">{t("resourceKits")}</h1>
      <div
        className={`image-grid-resource ${contextLang === "tr" ? "tr" : "en"}`}
      >
        <div className="image-item-resource">
          <img className="deneme23" src={client_list3} alt="Clien List" />

          <div className="text-item-resource">
            <p
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: "normal",
                fontSize: 21,
              }}
            >
              <Trans i18nKey="clientList" components={{ br: <br /> }} />
            </p>
          </div>
        </div>
        <div className="image-item-resource">
          <img src={marketing3} alt="Marketing" />
          <div className="text-item-resource">
            <p
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: "normal",
                fontSize: 21,
              }}
            >
              <Trans
                i18nKey="marketingManagerKit"
                components={{ br: <br /> }}
              />
            </p>
          </div>
        </div>
        <div className="image-item-resource">
          <img src={newbies3} alt="Newbies" />
          <div className="text-item-resource">
            <p
              id="newbies"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: "normal",
                fontSize: 21,
              }}
            >
              <Trans i18nKey="newbies" components={{ br: <br /> }} />
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
export default Resource;
