import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <div className="bg-[#001931] py-9 px-20">
                <div className=" text-white flex items-center justify-between">
                    <Link href="/" className=" flex gap-3 items-center ">
                        <Image src={Logo} alt="Logo" className="w-10"></Image>
                        <span className="font-bold  ">HERO.IO</span>
                    </Link>
                    <div className="">
                        <h1 className='text-xl font-medium mb-4'>Social Links</h1>
                        <div className="flex items-center gap-4 text-xl">
                            <Link href="https://x.com/MdMonerujamman" target='#'> <FaSquareXTwitter /></Link>
                            <Link href="https://www.linkedin.com/in/mdmonerujammanmunna/ " target='#'><FaLinkedin /> </Link>
                            <Link href="https://www.facebook.com/Md.MonerujammanMunna0" target='#'> <FaFacebook /></Link>
                        </div>
                    </div>
                </div>
                <hr className='opacity-20 text-[#E5E7EB] my-2' />
                <div className="text-center text-white mt-5">
                    <h2>Copyright © {new Date().getFullYear()} - All right reserved</h2>
                </div>
            </div>
        </>
    );
};

export default Footer;