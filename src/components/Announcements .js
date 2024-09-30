import "../styles/Announcements .css";
import image2 from "../icons/office3.jpg"
import image3 from "../icons/image3.jpg"
import image4 from "../icons/office2.jpg"
import useLocalStorage from "../hooks/useLocalStorage";
import { useTranslation } from "react-i18next";
const Announcements = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useLocalStorage("lang");
  
    const changeLang = () => {
      const newLang = lang === "tr" ? "en" : "tr";
      setLang(newLang);
      i18n.changeLanguage(newLang);
    }; 
    return (
        <section id="announcements">
        <div className="announcements_general_container">
          <div style={{height:"10vh"}}>
               
            </div>
            <div className="announcements_head">
                <p>{t("announcementAndUpdates")}</p>
            </div>
            <div className="announcements_container">
                <div className="col" style={{background:"#5086ed",color:"white"}}>
                    <div>
                       <p className="col_head">{t("lukasSaginaw")}</p>
                    <p className="col_prg">
                    {t("companyNewsletters")}
                    {t("companyNewsletters")}
                    </p>  
                    </div>
                   
                </div>
                <div className="col" style={{background:"#ffb923"}} >
                    <p className="col_head">{t("creatingCulture")}</p>
                    <p className="col_prg">
                    {t("companyNewsletters")}
                    {t("companyNewsletters")}
                    </p>


                   
                </div>
                <div className="col" style={{background:"#212938"}}>
                  
                    <p className="col_head">     {t("review")}</p>
                    <p className="col_prg">
                    {t("companyNewsletters")}
                    {t("companyNewsletters")}
                    </p>
                
                </div>
            </div>
        </div>
        </section>
    );
};
export default Announcements;
