import CardData from '@/Components/CardData';
import Link from 'next/link';
import React from 'react';
const TrendingAppsPage = async () => {
    const Data = await fetch("http://localhost:3001/MainData")
    const res = await Data.json()
    const Dataslice = await res.slice(0, 8)
    return (
        <>
            <div className="bg-base-300">
                <div className="pt-20 text-center px-5 lg:px-10">
                    <h1 className='text-4xl font-bold text-[#001931]'>Trending Apps</h1>
                    <p className='text-xl mt-4 text-[#627382] pb-10'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 px-5 lg:px-10 gap-4">
                    {
                        Dataslice.map(singleData => <CardData key={singleData.id} singleData={singleData}></CardData>)
                    }
                </div>
                <Link href="/Apps" className="mt-20 flex items-center justify-center pb-20">
                    <button className='btn  text-white bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] font-semibold'>Show All</button>
                </Link>
            </div>
        </>
    );
};

export default TrendingAppsPage;