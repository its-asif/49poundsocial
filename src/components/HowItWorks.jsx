import CountUp from "react-countup";

const HowItWorks = () => {
    return (
        <div className="bg-[#024963] p-10 text-white">
            <div className="text-center my-8">
                <h1 className="text-6xl font-bold mb-2">How Does It Work?</h1>
                <h2  className="text-4xl ">Dive In Today—It's A Piece Of Cake.</h2>
            </div>
            <div className="my-8 mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h1 className="text-7xl text-center font-bold text-[#f7b141]">
                        <CountUp 
                            end={1} 
                            duration={5} 
                            enableScrollSpy={true}
                        />
                    </h1>
                    <h2 className="text-2xl font-bold my-2">CHOOSE YOUR DESIRED PLAN</h2>
                    <p>Pick the package that suits you best. Add any extras you fancy.</p>
                </div>
                <div>
                    <h1 className="text-7xl text-center font-bold text-[#f7b141]">
                        <CountUp 
                            end={2} 
                            duration={5} 
                            enableScrollSpy={true}
                        />
                    </h1>
                    <h2 className="text-2xl font-bold my-2">COMPLETE INTAKE FORM</h2>
                    <p>Fill out the questionnaire about your brand and target audience.</p>
                </div>
                <div>
                    <h1 className="text-7xl text-center font-bold text-[#f7b141]">
                        <CountUp 
                            end={3} 
                            duration={5} 
                            enableScrollSpy={true}
                        />
                    </h1>
                    <h2 className="text-2xl font-bold my-2">GET ON-BRAND CONTENT</h2>
                    <p>Get top-notch posts within 7 working days.</p>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;