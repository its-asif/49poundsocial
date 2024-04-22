import { IoMdStar } from "react-icons/io";

const Reviews = () => {
    return (
        <div className="my-10 bg-[#024963] p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="flex flex-col justify-center">
                    <p className="text-[#f7b141]">What Some Of Our Clients Say.......</p>
                    <h1 className="text-3xl md:text-6xl font-bold text-white">Don’t Just Take Our Word For It</h1>
                </div>


                <div className="col-span-2 my-6 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-16">
                        <div>
                            <div className="text-[#f7b141] flex justify-center text-2xl"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                            <p className="text-center text-white text-xs my-4">"Been with 49 Pound Social for 2 years now. First, they set up our website, then handled our socials. Now, they're onto SEO and blogs. Great team to work with, I highly recommend using them for budget and quality."</p>
                            <h3 className="text-2xl text-center font-bold text-[#f7b141]">MICK ELLIS</h3>
                            <h3 className="text-center text-[#f7b141] text-sm">Taxi Company Owner</h3>
                        </div>
                        <div>
                            <div className="text-[#f7b141] flex justify-center text-2xl"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                            <p className="text-center text-white text-xs my-4">"Been with 49 Pound Social for 2 years now. First, they set up our website, then handled our socials. Now, they're onto SEO and blogs. Great team to work with, I highly recommend using them for budget and quality."</p>
                            <h3 className="text-2xl text-center font-bold text-[#f7b141]">MICK ELLIS</h3>
                            <h3 className="text-center text-[#f7b141] text-sm">Taxi Company Owner</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-16">
                        <div>
                            <div className="text-[#f7b141] flex justify-center text-2xl"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                            <p className="text-center text-white text-xs my-4">"Been with 49 Pound Social for 2 years now. First, they set up our website, then handled our socials. Now, they're onto SEO and blogs. Great team to work with, I highly recommend using them for budget and quality."</p>
                            <h3 className="text-2xl text-center font-bold text-[#f7b141]">MICK ELLIS</h3>
                            <h3 className="text-center text-[#f7b141] text-sm">Taxi Company Owner</h3>
                        </div>
                        <div>
                            <div className="text-[#f7b141] flex justify-center text-2xl"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                            <p className="text-center text-white text-xs my-4">"Been with 49 Pound Social for 2 years now. First, they set up our website, then handled our socials. Now, they're onto SEO and blogs. Great team to work with, I highly recommend using them for budget and quality."</p>
                            <h3 className="text-2xl text-center font-bold text-[#f7b141]">MICK ELLIS</h3>
                            <h3 className="text-center text-[#f7b141] text-sm">Taxi Company Owner</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;