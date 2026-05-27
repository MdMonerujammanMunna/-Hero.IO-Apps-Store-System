"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavButton = () => {
    const pathname = usePathname();
    const Button = <>
        <li className={`font-semibold ${pathname === "/" ? "bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-transparent bg-clip-text" : ""}`}><Link href="/">Home</Link ></li>
        <li className={`font-semibold ${pathname === "/Apps" ? "bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-transparent bg-clip-text" : ""}`}><Link href="/Apps">Apps</Link ></li>
        <li className={`font-semibold ${pathname === "/install" ? "bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-transparent bg-clip-text" : ""}`}><Link href="/install">Installation</Link ></li>
    </>;
    return (
        <>
            {Button}
        </>
    );
};

export default NavButton;