import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const CardData = ({ singleData }) => {
    return (
        <>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl">{`${singleData.title} : ${singleData.companyName}`}</h2>
                    <div className="flex items-center justify-between">
                        <div className="text-[#00D390] py-1.5 px-2.5 bg-[#F1F5E8] rounded-sm font-semibold flex items-center gap-2">
                            <FaDownload />
                            <span>{singleData.downloads}</span>
                        </div>
                        <div className="text-[#FF8811] py-1.5 px-2.5 bg-[#FFF0E1] rounded-sm font-semibold flex items-center gap-2">
                            <FaStar />
                            <spanp>5</spanp>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardData;