import Image from 'next/image';
import images from '../assets/error-404.png';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <>
            <div className="my-20 flex flex-col justify-center items-center px-10 space-y-4">
                <Image src={images} alt='Not Found'></Image>
                <h2 className='font-semibold text-4xl md:text-5xl '>Oops, page not found!</h2>
                <p className=' text-xl  text-[#627382]'>The page you are looking for is not available.</p>
                <Link href='/' className="btn  text-white bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] gap-2.5">
                    <span className="font-medium">Go Back !</span>
                </Link>
            </div>

        </>
    );
};

export default NotFoundPage;