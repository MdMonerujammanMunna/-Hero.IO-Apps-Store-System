"use client"
import { createContext, useState } from "react";
export const installAppContext = createContext();

const InstallcontextProvider = ({ children }) => {
    const [InstallApp, setInstallApp] = useState([]);
    const data = {
        InstallApp,
        setInstallApp
    }
    return (
        <installAppContext.Provider value={data}>
            {children}
        </installAppContext.Provider>
    );
};

export default InstallcontextProvider; 