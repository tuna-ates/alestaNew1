import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { languageData } from "./data/languageData.js";
import { DataProvider } from "./contexts/DataContext.js";
import { LangProvider } from './contexts/LangContext.js';

const newLang = localStorage.getItem("lang")
  ? localStorage.getItem("lang")
  : "tr";

const resources = {
  tr: languageData.language.tr,
  en: languageData.language.en,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: resources,
    lng: newLang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <DataProvider>


    <React.StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
 
 
 
  </DataProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
