import CardData from '@/Components/CardData';
import React from 'react';
const TrendingAppsPage = async () => {
    const Data = await fetch("http://localhost:3001/MainData")
    const res = await Data.json()

    return (
        <>
            <div className="pt-20 text-center px-5 lg:px-10 bg-base-300">
                <h1 className='text-4xl font-bold text-[#001931]'>Trending Apps</h1>
                <p className='text-xl mt-4 text-[#627382] pb-10'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 px-5 lg:px-10 gap-4 bg-base-300">
                {
                    res.map(singleData => <CardData key={singleData.id} singleData={singleData}></CardData>)
                }
            </div>
        </>
    );
};

export default TrendingAppsPage;