import React from 'react';

const StatPage = () => {
    return (
        <>
            <div className="bg-[linear-gradient(180deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-white  p-20">
                <h2 className='text-5xl font-bold text-center'>Trusted by Millions, Built for You</h2>
                <div className=" flex items-center justify-between gap-6">
                    <div className="stats w-11/12 mx-auto stats-vertical lg:stats-horizontal mt-10">
                        <div className="stat border-none text-center">
                            <div className="stat-title text-white">Total Downloads</div>
                            <div className="stat-value text-6xl font-extrabold my-4">29.6M</div>
                            <div className="stat-desc text-white">21% more than last month</div>
                        </div>
                        <div className="stat border-none text-center">
                            <div className="stat-title text-white">Total Reviews</div>
                            <div className="stat-value text-6xl font-extrabold my-4">906K</div>
                            <div className="stat-desc text-white">46% more than last month</div>
                        </div>
                        <div className="stat border-none text-center">
                            <div className="stat-title text-white">Active Apps</div>
                            <div className="stat-value text-6xl font-extrabold my-4">132+</div>
                            <div className="stat-desc text-white">31 more will Launch</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default StatPage;