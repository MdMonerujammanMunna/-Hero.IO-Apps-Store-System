
import Image from "next/image";
import appsImage from "../../../assets/demo-app (2).webp"

import Download from "../../../assets/icon-downloads.png"
import Rating from "../../../assets/icon-ratings.png"
import Review from "../../../assets/icon-review.png"
import Link from "next/link";
import InstallationPage from "@/app/install/page";
const DetailsPage = () => {
    return (
        <>
            <div className="p-20 bg-base-300">
                <div className="flex items-center flex-col md:flex-row  gap-10">
                    <div className="p-10 bg-white rounded-2xl">
                        <Image src={appsImage} alt="NOt fount"></Image>
                    </div>
                    <div className="w-full">
                        <div className="space-y-2">
                            <h1 className="font-bold text-4xl text-[#001931]">Name of your apps</h1>
                            <p className="text-[#627382 text-xl]">Developed by <span className="font-semibold bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-transparent bg-clip-text">productive</span></p>
                        </div>
                        <hr className=" my-7 border-[#00193120]" />
                        <div className="flex flex-col  md:flex-row gap-10 items-center ">
                            <div className="space-y-1 flex items-center justify-center flex-col">
                                <Image src={Download} alt="Not foun"></Image>
                                <p className="text-[#00193180]">Downloads</p>
                                <h1 className="font-extrabold text-4xl text-[#001931]">hi M</h1>
                            </div>
                            <div className="space-y-1 flex items-center justify-center flex-col">
                                <Image src={Rating} alt="Not foun"></Image>
                                <p className="text-[#00193180]">Average Ratings</p>
                                <h1 className="font-extrabold text-4xl text-[#001931]">hi M</h1>
                            </div>
                            <div className="space-y-1 flex items-center justify-center flex-col">
                                <Image src={Review} alt="Not foun"></Image>
                                <p className="text-[#00193180]">Total Reviews</p>
                                <h1 className="font-extrabold text-4xl text-[#001931]">hi M</h1>
                            </div>
                        </div>
                        <div className="  mt-8 font-semibold grid  justify-center md:justify-start ">
                            {/* <InstallationPage></InstallationPage> */}
                        </div>
                    </div>
                </div>
                <hr className=" my-10 border-[#00193120]" />
            </div>
        </>
    );
};

export default DetailsPage;