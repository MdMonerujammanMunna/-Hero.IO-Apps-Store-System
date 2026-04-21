"use client"
import Image from "next/image";
import Logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
    const pathname = usePathname()
    const Button = <>
        <li className={`font-semibold ${pathname === "/" ? "bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-transparent bg-clip-text" : ""}`}><Link href="/">Home</Link ></li>
        <li className={`font-semibold ${pathname === "/Apps" ? "bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-transparent bg-clip-text" : ""}`}><Link href="/Apps">Apps</Link ></li>
        <li className={`font-semibold ${pathname === "/install" ? "bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-transparent bg-clip-text" : ""}`}><Link href="/install">Installation</Link ></li>
    </>;
    return (
        <div className=" container mx-auto">
            <div className="navbar bg-base-100 shadow-sm px-2 md:px-5 lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Button}
                        </ul>
                    </div>
                    <Link href="/" className="btn flex gap-3 items-center border-none outline-none shadow-none bg-white">
                        <Image src={Logo} alt="Logo" className="w-10"></Image>
                        <span className="font-bold bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] bg-clip-text text-transparent">HERO.IO</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Button}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <Link href='https://github.com/MdMonerujammanMunna' target="#" className="btn text-white bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] gap-2.5">
                        <FaGithub className="font-semibold text-xl" />
                        <span className="font-semibold">Contribute</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;