
const Banner = () => {
    return (
            <div>
                <div className="hero min-h-screen bg-[#024963] text-white px-10">
                    <div className="hero-content grid grid-cols-1 md:grid-cols-2">

                        <div>
                            <h1 className="text-7xl font-bold">Affordable Social Media Management.</h1>
                            <p className="pt-10 pb-6 font-bold text-3xl text-[#f7b141]">From Only £49 Per Month.</p>

                            <div className="flex gap-10">
                                <button className="btn w-48 bg-[#f7b141] text-clip font-bold border-0">BOOK A CALL</button>

                                <button className="btn w-48 bg-white text-black text-clip font-bold border-0">Get Started</button>
                            </div>
                        </div>

                        <img src="banner.webp" className="max-w-lg rounded-lg" />
                    </div>
                </div>
            </div>
    );
};

export default Banner;