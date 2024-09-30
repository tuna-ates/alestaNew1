

import "../styles/Header.css"
import { Link } from "react-router-dom";
import logo from "../icons/Alesta_Logo-removebg-preview.png"
import { useHistory } from "react-router-dom";
import image1 from "../icons/image1.jpeg"
import React from 'react';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import { useTranslation } from "react-i18next";
import { useLang } from "../contexts/LangContext";


const Header = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useLocalStorage("lang");
  const { contextLang, setContextLang } = useLang();

  let history = useHistory();

  function pushHome() {
    history.push("/");
  }

  function changeLang() {
    const newLang = lang === "tr" ? "en" : "tr";
    setLang(newLang);
    setContextLang(newLang);
    i18n.changeLanguage(newLang);

  };

  return (
    // <div className="header">

    //  deneme
    // </div>

    <div className="container1">
      <nav className="headerContainer1" >
        <div className="header">
          <div className="logo-div" onClick={pushHome}>
            <img className="logo" src={logo}></img>
          </div>

          <div className="nav-bar">
            <a className="navbar-item" href='#entryPage'>{t("homeHeader")}</a>
            <a className="navbar-item" href='#announcements'>{t("announcementHeader")}</a>
            <a className="navbar-item" href='#teammate'>{t("Team")}</a>
            <a className="navbar-item" href='#resource'>{t("resourceHeader")}</a>
            <a className="navbar-item" href='#external'>{t("externalHeader")}</a>
            <a className="navbar-item" href='#contact'>{t("contactHeader")}</a>

        


          </div>
        </div>

        {/* <select
        onChange={changeLang}
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      >
        {lang=="tr" ? 
        <><option selected="selected" value="TR">TR</option>
         <option value="en">EN</option> </>
          :  
          <>
        <option selected="selected" value="en">EN</option>
        <option value="tr">TR</option>
        </>
        
        }

      </select> */}
        {
          contextLang == "en" ? <button className="translateButton" onClick={changeLang}> <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="2.5em" viewBox="0 0 36 36" ><path fill="#e30917" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></path><path fill="#eee" d="M16 24a6 6 0 1 1 0-12c1.31 0 2.52.425 3.507 1.138A7.33 7.33 0 0 0 14 10.647A7.353 7.353 0 0 0 6.647 18A7.353 7.353 0 0 0 14 25.354c2.195 0 4.16-.967 5.507-2.492A5.96 5.96 0 0 1 16 24m3.913-5.77l2.44.562l.22 2.493l1.288-2.146l2.44.561l-1.644-1.888l1.287-2.147l-2.303.98l-1.644-1.889l.22 2.494z"></path></svg></button> :
            <button className="translateButton" onClick={changeLang}><svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="2em" viewBox="0 0 36 36" ><path fill="#b22334" d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2M18 9h18v2H18z"></path><path fill="#eee" d="M.068 27.679q.025.14.059.277q.04.15.092.296c.089.259.197.509.333.743L.555 29h34.89l.002-.004a4 4 0 0 0 .332-.741a4 4 0 0 0 .152-.576c.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679M0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM.555 7l-.003.005zM.128 8.044c.025-.102.06-.199.092-.297a4 4 0 0 0-.092.297M18 9h18c0-.233-.028-.459-.069-.68a3.6 3.6 0 0 0-.153-.576A4 4 0 0 0 35.445 7H18z"></path><path fill="#3c3b6e" d="M18 5H4a4 4 0 0 0-4 4v10h18z"></path><path fill="#fff" d="m2.001 7.726l.618.449l-.236.725L3 8.452l.618.448l-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2l.618.449l-.236.725l.617-.448l.618.448l-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 9l-.235.726zm-8 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L5 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 13l-.235.726zm-6-6l.618.449l-.236.725L7 8.452l.618.448l-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 7l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 11l-.235.726zM6.383 12.9L7 12.452l.618.448l-.236-.725l.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 11l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 11l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 15l-.235.726zM6.383 16.9L7 16.452l.618.448l-.236-.725l.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 15l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 15l-.235.726z"></path></svg></button>

        }


        <div className="toggler-navbar">
          <Navbar color="faded" light >
            <NavbarToggler onClick={toggleNavbar} className="me-2" />

            <Collapse className="collapse" isOpen={!collapsed} navbar>

              <Nav navbar >
                <NavItem>
                  <a className="navbar-item" href='#entryPage'>{t("homeHeader")}</a>
                </NavItem>
                <NavItem>
                  <a className="navbar-item" href='#announcements'>{t("announcementHeader")}</a>
                </NavItem>
                <NavItem>
                  <a className="navbar-item" href='#teammate'>{t("team")}</a>
                </NavItem>
                <NavItem>
                  <a className="navbar-item" href='#resource'>{t("resourceHeader")}</a>
                </NavItem>
                <NavItem>
                  <a className="navbar-item" href='#external'>{t("externalHeader")}</a>
                </NavItem>
                <NavItem>
                  <a className="navbar-item" href='#contact'>{t("contactHeader")}</a>
                </NavItem>
              </Nav>

            </Collapse>

          </Navbar>
        </div>
        {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-general" aria-controls="navbar-general">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-general">
             <Link id="header-item">Home</Link>
            <Link id="header-item">Profile</Link>
            <Link id="header-item">Teams</Link>
            <Link id="header-item">Announcements </Link>
            <Link id="header-item">Contact</Link>
        </div> */}

      </nav>
      {/* <div className="containerEntryPage">
            
          
            <div className="imageContainer">
               
                     <img className="image1" src={image1}/>    
                   
        
                    <img className="alestaLogo" src={logo}/>  
              
                         <p className="welcome_text">Hoşgeldiniz</p> 
             
                   
             
                        
                     
                        
            </div>
        
        </div> */}
      <div className="containerEntryPage">
        <div className="imageContainer">
          <img className="image1" src={image1} />
          <img className="alestaLogo" src={logo} />
        </div>

      </div>
    </div>

  )



}
export default Header;