import CardData from "@/Components/CardData";


const AppsPage = async () => {
    const Data = await fetch("http://localhost:3001/MainData")
    const res = await Data.json()
    return (
        <>
            <div className="py-20 bg-base-300 px-5 lg:px-10 ">
                <div className="text-center space-y-4 mb-10">
                    <h1 className="text-5xl font-bold">Our All Applications</h1>
                    <p className="text-xl text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className="mb-6 flex flex-col-reverse sm:flex-row gap-4  items-center justify-between">
                    <div className="flex items-center gap-1 text-2xl font-bold">
                        <span>({res.length})</span>
                        <p>Apps Found</p>
                    </div>
                    <label className="input">
                        <svg className="h-[1.5em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="search Apps" />
                    </label>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 px-5 lg:px-10 gap-4">
                    {
                        res.map(singleData => <CardData key={singleData.id} singleData={singleData}></CardData>)
                    }
                </div>
            </div>
        </>
    );
};

export default AppsPage;