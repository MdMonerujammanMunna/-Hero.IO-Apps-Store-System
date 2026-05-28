"use client"
import { SortBar } from "@/Components/Sort/Sort";
import { installAppContext } from "@/context/installcontext";
import { useContext } from 'react';

const InstallationPage = () => {
    const { InstallApp } = useContext(installAppContext);
    return (
        <>
            <div className="bg-[#F5F5F5] py-20">
                <div className="text-center mb-10">
                    <h1 className="text-5xl text-[#001931] font-bold ">Your Installed Apps</h1>
                    <p className="text-[#627382] text-xl mt-4">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="px-5 lg:px-10 ">
                    <p className="text-[#001931] text-2xl font-semibold">{InstallApp.length} Apps Found</p>
                    <div className="">
                        {/* <SortBar /> */}
                    </div>

                </div>
                {/* {InstallApp.map(item => <p key={item.id}>{item.title}</p>)} */}
            </div>
        </ >
    );
};

export default InstallationPage;