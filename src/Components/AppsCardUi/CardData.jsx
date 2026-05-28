import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Installbutton from "../InstallButton/Installbutton";

const CardData = ({ singleData }) => {
    return (
        <>
            <div className="card bg-base-100 shadow-sm rounded-2xl">
                <div className="w-full bg-[#D9D9D9] rounded-t-2xl flex justify-center items-center py-10">
                    <Image src={singleData.image} width={80} height={80} alt={singleData.title}></Image>
                </div>
                <div className="card-body">
                    <h2 className="text-xl">{`${singleData.title} : ${singleData.companyName}`}</h2>
                    <div className="flex items-center justify-between">
                        <div className="text-[#00D390] py-1.5 px-2.5 bg-[#F1F5E8] rounded-sm font-semibold flex items-center gap-2">
                            <FaDownload />
                            <span>{singleData.downloads}</span>
                        </div>
                        <div className="text-[#FF8811] py-1.5 px-2.5 bg-[#FFF0E1] rounded-sm font-semibold flex items-center gap-2">
                            <FaStar />
                            <span>{singleData.ratingAvg}</span>
                        </div>
                    </div>
                    <div className="w-full  mt-4 font-semibold flex justify-between items-center flex-wrap gap-3">
                        <Installbutton singleData={singleData} />
                        <Link href={`Apps/${singleData.id}`} className="btn bg-[#FF8811] text-white">App Info</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardData;