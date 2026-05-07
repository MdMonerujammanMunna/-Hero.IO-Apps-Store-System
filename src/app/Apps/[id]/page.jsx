import Image from "next/image";

import Download from "../../../assets/icon-downloads.png"
import Rating from "../../../assets/icon-ratings.png"
import Review from "../../../assets/icon-review.png"
import Link from "next/link";
import Chart from "@/Components/Chart/Chart";

const DetailsPage = async ({ params }) => {
    const { id } = await (params)
    const Data = await fetch(`https://hero-io-apps-store-system-server.onrender.com/MainData/${id}`)
    const res = await Data.json()

    return (
        <>
            <div className="py-20 px-10 bg-base-300">
                <div className="flex items-center flex-col md:flex-row  gap-10">
                    <div className="p-10 bg-white rounded-2xl">
                        <Image src={res.image} width={200} height={200} alt="NOt fount"></Image>
                    </div>
                    <div className="w-full">
                        <div className="space-y-2">
                            <h1 className="font-bold text-4xl text-[#001931]">{res.title}</h1>
                            <p className="text-[#627382 text-xl]">Developed by <span className="font-semibold bg-[linear-gradient(90deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] text-transparent bg-clip-text">{res.companyName}</span></p>
                        </div>
                        <hr className=" my-7 border-[#00193120]" />
                        <div className="flex flex-col  md:flex-row gap-10 items-center ">
                            <div className="space-y-1 flex items-center justify-center flex-col">
                                <Image src={Download} alt="Not foun"></Image>
                                <p className="text-[#00193180]">Downloads</p>
                                <h1 className="font-extrabold text-4xl text-[#001931]">{res.downloads}</h1>
                            </div>
                            <div className="space-y-1 flex items-center justify-center flex-col">
                                <Image src={Rating} alt="Not foun"></Image>
                                <p className="text-[#00193180]">Average Ratings</p>
                                <h1 className="font-extrabold text-4xl text-[#001931]">{res.ratingAvg}</h1>
                            </div>
                            <div className="space-y-1 flex items-center justify-center flex-col">
                                <Image src={Review} alt="Not foun"></Image>
                                <p className="text-[#00193180]">Total Reviews</p>
                                <h1 className="font-extrabold text-4xl text-[#001931]">{res.reviews}</h1>
                            </div>
                        </div>
                        <div className="  mt-8 font-semibold grid  justify-center md:justify-start ">
                            <Link href="/install" className="btn bg-[#00D390] text-white">Install Now (<span>75</span> MB)</Link>
                        </div>
                    </div>
                </div>
                <hr className=" my-10 border-[#00193120]" />
                <Chart res={res}></Chart>
                <hr className=" my-10 border-[#00193120]" />
                <div className="">
                    <h1 className="text-2xl font-semibold mb-6">Description</h1>
                    <div className="space-y-10 text-[#627382] text-justify md:text-left">
                        <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
                        </p>
                        <p>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
                        </p>
                        <p>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsPage;