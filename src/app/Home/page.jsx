import HeroImag from '../../assets/hero.png';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
    return (
        <>
            <div className='px-5 lg:px-10'>
                <div className="mt-20 text-center flex flex-col justify-center items-center">
                    <h1 className=' text-[#001931] font-bold text-7xl '>We Build <br />
                        <span className='font-black bg-clip-text text-transparent bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)]'>Productive</span> Apps</h1>
                    <p className="max-w-250  mt-4">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
                    <Link href="https://play.google.com/store/apps?hl=en" target='#' className="btn bg-white border-2">
                        <button className='flex items-center gap-2 '>
                            <Image src="https://thesvg.org/icons/google-play/default.svg" alt="Google Play"
                                width={28} height={28} />
                            <span className='text-xl font-semibold'>Google Play</span>
                        </button>
                    </Link>
                    <Link href="https://apps.apple.com/us/app/apple-store/id375380948" target='#' className="btn bg-white border-2">
                        <button className='flex items-center gap-2 '>
                            <Image src="https://thesvg.org/icons/app-store/default.svg" alt="App Store"
                                width={28} height={28} />
                            <span className='text-xl font-semibold'>App Store</span>
                        </button>
                    </Link>
                </div>
                <div className="mt-10 flex items-center justify-center">
                    <Image src={HeroImag} alt='Apps Image'></Image>
                </div>
            </div>
        </>
    );
};

export default HomePage;