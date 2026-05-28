"use client"
import NotFoundApp from "@/Components/NotFoundApp/NotFoundApp";
import { SortBar } from "@/Components/Sort/Sort";
import { installAppContext } from "@/context/installcontext";
import Image from "next/image";
import { useContext } from 'react';
import { FaDownload, FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";

const InstallationPage = () => {
    const { InstallApp, setInstallApp } = useContext(installAppContext);
    const RemoveHandaler = (id) => {
        const updatedApps = InstallApp.filter(item => item.id !== id);
        if (updatedApps) {
            toast.error(`${InstallApp.find(item => item.id === id)?.title} uninstalled successfully!`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setInstallApp(updatedApps);
        }

    }
    return (
        <>
            <div className="bg-[#F5F5F5] py-20">
                {InstallApp.length === 0 ?
                    <>
                        <NotFoundApp />
                    </>
                    :
                    <>
                        <div className="">
                            <div className="text-center mb-10">
                                <h1 className="text-5xl text-[#001931] font-bold ">Your Installed Apps</h1>
                                <p className="text-[#627382] text-xl mt-4">Explore All Trending Apps on the Market developed by us</p>
                            </div>
                            <div className="px-5 lg:px-10 ">
                                <p className="text-[#001931] text-2xl font-semibold">{InstallApp.length} Apps Found</p>
                                <div className="">
                                    {/* <SortBar /> */}
                                </div>

                                {InstallApp.map(item =>
                                    <div className="bg-white p-4 rounded-lg mt-8 shadow-2xl mb-4 flex items-center justify-between " key={item.id}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-20 h-20 rounded-2xl bg-[#D9D9D9] flex items-center justify-center">
                                                <Image src={item.image} alt={item.title} width={50} height={50} className="rounded-lg" />
                                            </div>
                                            <div className="">
                                                <h2 className="text-xl font-semibold text-[#001931]">{item.title} : <span className="font-normal">{item.companyName}</span></h2>
                                                <div className="flex items-center gap-4 mt-2">
                                                    <div className="text-[#00D390]  font-semibold flex items-center gap-2">
                                                        <FaDownload />
                                                        <span>{item.downloads}</span>
                                                    </div>
                                                    <div className="text-[#FF8811]  font-semibold flex items-center gap-2">
                                                        <FaStar />
                                                        <span>{item.ratingAvg}</span>
                                                    </div>
                                                    <div className="">
                                                        <button className="text-[#627382]  font-medium ">
                                                            <span>{item.size}</span> MB
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <button onClick={() => RemoveHandaler(item.id)} className="btn bg-[#00D390] text-white">Uninstall</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>}

            </div>
        </ >
    );
};

export default InstallationPage;