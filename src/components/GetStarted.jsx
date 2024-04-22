import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const GetStarted = () => {
    return (
        <div>
            <div className="hero min-h-screen px-2 md:px-10">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2">

                    <div className="md:px-16">
                        <h1 className="text-2xl md:text-4xl font-bold">Quality Doesn't Have To Break The Bank.</h1>

                        <p className="pt-4 font-bold text-lg md:text-xl text-black">
                        At 49 Pound Social, we believe in delivering top-notch quality without the hefty price tag. With our affordable rates, you can enjoy premium services that won't break the bank.
                        </p>
                        
                        <p className="py-4 text-slate-500">
                        In today’s busy business world, managing social media can be a challenge. Our dedicated team handles your social media presence, allowing you to focus on your core operations while we ensure your brand stays active and engaged online. Let us take care of your social media, so you can focus on growing your business.
                        </p>

                        <div className="flex gap-10">
                            <button className="btn w-48 bg-[#f7b141] text-black font-bold mx-auto">GET STARTED</button>
                        </div>
                    </div>

                    <div 
                        data-aos="fade-up" 
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000">
                        <img src="rocket-laptop.webp" className="md:max-w-md rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;