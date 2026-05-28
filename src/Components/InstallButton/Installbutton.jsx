"use client"
import { installAppContext } from '@/context/installcontext';
import { redirect } from 'next/navigation';
import { useContext } from 'react';


const Installbutton = ({ singleData }) => {
    const { InstallApp, setInstallApp } = useContext(installAppContext);
    const ClickHandler = () => {
        if (InstallApp.find(item => item.id === singleData.id)) {
            alert("you are already install this app");

        } else {
            alert(`Installing ${singleData.title}...`);
            setInstallApp([...InstallApp, singleData]);
        }
    }
    return (
        <>
            <button onClick={ClickHandler} className="btn bg-[#00D390] text-white">Install Now (<span>{singleData.size}</span> MB)</button>
        </>
    );
};

export default Installbutton;