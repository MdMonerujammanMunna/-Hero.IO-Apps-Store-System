import React from 'react';

const HomePage = () => {
    return (
        <>
            <div className="mt-20 text-center flex flex-col justify-center items-center px-5 lg:px-10">
                <h1 className=' text-[#001931] font-bold text-7xl '>We Build <br />
                    <span className='font-black bg-clip-text text-transparent bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)]'>Productive</span> Apps</h1>
                <p className="max-w-250  mt-4">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
        </>
    );
};

export default HomePage;