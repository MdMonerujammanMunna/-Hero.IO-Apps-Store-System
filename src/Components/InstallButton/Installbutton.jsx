"use client"
import { installAppContext } from '@/context/installcontext';
import { useContext } from 'react';
import { toast } from 'react-toastify';


const Installbutton = ({ singleData }) => {
    const { InstallApp, setInstallApp } = useContext(installAppContext);
    const ClickHandler = () => {
        if (InstallApp.find(item => item.id === singleData.id)) {
            toast.info("You have already installed this app.", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        } else {
            toast.success(`Installing ${singleData.title}...`, {
                position: "top-center",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
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