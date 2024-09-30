
import React, { useRef, useState } from "react";
import "../styles/NewNavBar.css";
import { useHistory } from "react-router-dom";
import logo from "../icons/Alesta_Logo-removebg-preview.png"
import image1 from "../icons/entryImage2.jpg"
import useLocalStorage from "../hooks/useLocalStorage";
import { useLang } from "../contexts/LangContext";
import { useTranslation } from "react-i18next";

const NewNavbar = () => {
    // Desktop Navigation
    const desktopNavElement = useRef(null);
    const searchContainerElement = useRef(null);
    const overlayElement = useRef(null);
    const { t, i18n } = useTranslation();
    const { contextLang, setContextLang } = useLang();
    const [lang, setLang] = useLocalStorage("lang");


    function changeLang() {
        const newLang = lang === "tr" ? "en" : "tr";
        setLang(newLang);
        setContextLang(newLang);
        i18n.changeLanguage(newLang);

    };

    const addSearch = () => {
        desktopNavElement.current.classList.add("hide");
        searchContainerElement.current.classList.remove("hide");
        overlayElement.current.classList.add("show");
    };

    const addClose = () => {
        desktopNavElement.current.classList.remove("hide");
        searchContainerElement.current.classList.add("hide");
        overlayElement.current.classList.remove("show");
    };

    const addOverlay = () => {
        desktopNavElement.current.classList.remove("hide");
        searchContainerElement.current.classList.add("hide");
        overlayElement.current.classList.remove("show");
    };

    // Mobile Navigation

    const navContainerElement = useRef(null);
    const searchBarElement = useRef(null);
    const navElement = useRef(null);

    const addMobMenu = () => {
        navContainerElement.current.classList.toggle("active");
    };

    const addMobSearch = () => {
        searchBarElement.current.classList.add("active");
        navElement.current.classList.add("move-up");
        desktopNavElement.current.classList.add("move-down");
    };

    const addMobCancel = () => {
        searchBarElement.current.classList.remove("active");
        navElement.current.classList.remove("move-up");
        desktopNavElement.current.classList.remove("move-down");
    };

    const [count, setCount] = useState("0");
    function openCloseCount() {
        if (count === "1") {
            setCount("0")
            addClose();
        } else {
            setCount("1")
        }
    }


    let history = useHistory();

    function pushHome() {
        history.push("/");
    }
    return (
        <>
        <section id="pageEntry">
            <div className="nav-container" ref={navContainerElement}>
                <nav ref={navElement}>
                    <ul className="mobile-nav">
                        <li>
                            <div className="menu-icon-container" onClick={() => addMobMenu()}>
{/* 
                            <div className="div-logo" onClick={pushHome}>
                                    <img style={{height:"2rem"}} className="logo2" src={logo}></img>
                                </div> */}

                                <div className="menu-icon">
                                    <span className="line-1"></span>
                                    <span className="line-2"></span>
                                   
                                </div>
                              
                            </div>
                        </li>

                        <li>
                            <a href="#" className="link-logo"></a>

                        </li>

                    </ul>

                    <div className="navDesktop">
                        <ul className="desktop-nav" ref={desktopNavElement}>
                            <li id="logoContainer">

                                <div className="logo-div"   onClick={pushHome}>
                                  <a  href='#pageEntry'>
                                    <img className="logo" src={logo}></img>
                                    </a>
                                </div>
                            </li>
                            {/* <li onClick={() => addMobMenu()} id="homeContainer">
                                <a className="navbar-item" href='#entryPage'>{t("homeHeader")}</a>
                            </li> */}
                             <li style={{width:"44rem"}} onClick={() => addMobMenu()} id="announcementsContainer">
                                

                            </li>
                            <li onClick={() => addMobMenu()} id="announcementsContainer">
                                <a className="navbar-item" href='#announcements'>{t("announcementHeader")}</a>

                            </li>
                           
                            <li onClick={() => addMobMenu()} id="resourceContainer">
                                <a className="navbar-item" href='#resource'>{t("resourceHeader")}</a>

                            </li>
                            {/* <li onClick={() => addMobMenu()} id="externalContainer">
                                <a className="navbar-item" href='#external'>{t("externalHeader")}</a>

                            </li > */}
                             <li onClick={() => addMobMenu()} id="teammateContainer">
                                <a className="navbar-item" href='#teammate'>{t("team")}</a>

                            </li>
                            <li onClick={() => addMobMenu()} id="contactContainer">
                                <a className="navbar-item" href='#contact'>{t("contactHeader")}</a>

                            </li>
                            {/* <li id="flagLangue">
                                {
                                    contextLang == "en" ? <svg style={{  cursor: "pointer" }} onClick={changeLang} className="translateButton" xmlns="http://www.w3.org/2000/svg" width="1.7em" height="2em" viewBox="0 0 36 36" ><path fill="#e30917" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></path><path fill="#eee" d="M16 24a6 6 0 1 1 0-12c1.31 0 2.52.425 3.507 1.138A7.33 7.33 0 0 0 14 10.647A7.353 7.353 0 0 0 6.647 18A7.353 7.353 0 0 0 14 25.354c2.195 0 4.16-.967 5.507-2.492A5.96 5.96 0 0 1 16 24m3.913-5.77l2.44.562l.22 2.493l1.288-2.146l2.44.561l-1.644-1.888l1.287-2.147l-2.303.98l-1.644-1.889l.22 2.494z"></path></svg> :
                                        <svg style={{  cursor: "pointer" }} className="translateButton" onClick={changeLang} xmlns="http://www.w3.org/2000/svg" width="1.7em" height="2em" viewBox="0 0 36 36" ><path fill="#b22334" d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2M18 9h18v2H18z"></path><path fill="#eee" d="M.068 27.679q.025.14.059.277q.04.15.092.296c.089.259.197.509.333.743L.555 29h34.89l.002-.004a4 4 0 0 0 .332-.741a4 4 0 0 0 .152-.576c.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679M0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM.555 7l-.003.005zM.128 8.044c.025-.102.06-.199.092-.297a4 4 0 0 0-.092.297M18 9h18c0-.233-.028-.459-.069-.68a3.6 3.6 0 0 0-.153-.576A4 4 0 0 0 35.445 7H18z"></path><path fill="#3c3b6e" d="M18 5H4a4 4 0 0 0-4 4v10h18z"></path><path fill="#fff" d="m2.001 7.726l.618.449l-.236.725L3 8.452l.618.448l-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2l.618.449l-.236.725l.617-.448l.618.448l-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 9l-.235.726zm-8 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L5 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 13l-.235.726zm-6-6l.618.449l-.236.725L7 8.452l.618.448l-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 7l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 11l-.235.726zM6.383 12.9L7 12.452l.618.448l-.236-.725l.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 11l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 11l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 15l-.235.726zM6.383 16.9L7 16.452l.618.448l-.236-.725l.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 15l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 15l-.235.726z"></path></svg>

                                }
                            </li> */}

                        </ul>
                        {/* {
                            contextLang == "en" ? <button className="translateButton"  onClick={changeLang}> <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="2.5em" viewBox="0 0 36 36" ><path fill="#e30917" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></path><path fill="#eee" d="M16 24a6 6 0 1 1 0-12c1.31 0 2.52.425 3.507 1.138A7.33 7.33 0 0 0 14 10.647A7.353 7.353 0 0 0 6.647 18A7.353 7.353 0 0 0 14 25.354c2.195 0 4.16-.967 5.507-2.492A5.96 5.96 0 0 1 16 24m3.913-5.77l2.44.562l.22 2.493l1.288-2.146l2.44.561l-1.644-1.888l1.287-2.147l-2.303.98l-1.644-1.889l.22 2.494z"></path></svg></button> :
                                <button className="translateButton" onClick={changeLang}><svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="2em" viewBox="0 0 36 36" ><path fill="#b22334" d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2M18 9h18v2H18z"></path><path fill="#eee" d="M.068 27.679q.025.14.059.277q.04.15.092.296c.089.259.197.509.333.743L.555 29h34.89l.002-.004a4 4 0 0 0 .332-.741a4 4 0 0 0 .152-.576c.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679M0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM.555 7l-.003.005zM.128 8.044c.025-.102.06-.199.092-.297a4 4 0 0 0-.092.297M18 9h18c0-.233-.028-.459-.069-.68a3.6 3.6 0 0 0-.153-.576A4 4 0 0 0 35.445 7H18z"></path><path fill="#3c3b6e" d="M18 5H4a4 4 0 0 0-4 4v10h18z"></path><path fill="#fff" d="m2.001 7.726l.618.449l-.236.725L3 8.452l.618.448l-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2l.618.449l-.236.725l.617-.448l.618.448l-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 9l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 9l-.235.726zm-8 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L5 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L9 13l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L13 13l-.235.726zm-6-6l.618.449l-.236.725L7 8.452l.618.448l-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 7l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 7l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 11l-.235.726zM6.383 12.9L7 12.452l.618.448l-.236-.725l.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 11l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 11l-.235.726zm-12 4l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L3 15l-.235.726zM6.383 16.9L7 16.452l.618.448l-.236-.725l.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L11 15l-.235.726zm4 0l.618.449l-.236.725l.617-.448l.618.448l-.236-.725l.618-.449h-.764L15 15l-.235.726z"></path></svg></button>

                        } */}
                    </div>

                </nav>

            </div>

            <div className="containerEntryPage">
                <div className="imageContainer"  >
                    <img className="image1" src={image1} >
                    
                     </img>

                     <p className="entryPrg">Finans sektörüne özel yazılım çözümlerimizle yenilikçi bir iz bırakın!</p>
                    {/* <img className="alestaLogo" src={logo} /> */}
                   
                </div>

            </div>

            <div
                className="overlay"
                ref={overlayElement}
                onClick={() => addOverlay()}
            ></div>
            </section>
        </>
    );
};

export default NewNavbar;