import Image from 'next/image';
import React from 'react';
import NotFoundImage from '../../assets/App-Error.png';
import Link from 'next/link';
const NotFoundApp = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center ">
                <Image src={NotFoundImage} alt="Not Found" width={400} height={400} className="mx-auto" />
                <h1 className="text-5xl font-bold text-center mt-4 text-[#001931]">OPPS!! APP NOT FOUND</h1>
                <p className="text-lg text-center text-[#627382] mt-2">The App you are requesting is not found on our system.  please try another apps</p>
                <Link href="/Apps" className="btn mt-5 text-white bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] gap-2.5">
                    <span className="font-semibold">Go Back!</span>
                </Link>
            </div>
        </>
    );
};

export default NotFoundApp;