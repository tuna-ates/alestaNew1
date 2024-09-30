import {createContext, useState} from "react"
import { languageData } from "../data/languageData.js";

export const DataContext=createContext();

export const DataProvider=({children})=>{
    const [data,setData]=useState(languageData);

    return <DataContext.Provider value={{data,setData}}>
        {children}
    </DataContext.Provider>
}