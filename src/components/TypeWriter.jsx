import Typewriter from "typewriter-effect";

const TypeWriter = () => {
    return (
        <div className="my-10 bg-[#024963] text-white">
            
            <div className='flex justify-center my-4'>
                <p className="mx-2 my-6 text-2xl md:text-4xl font-bold flex flex-col lg:flex-row text-center">
                A Social Media Company That's &nbsp;
                    <span className="text-[#f7b141]" >
                        <Typewriter
                        options={{
                            strings: ['Creative', 'Reliable', "Affordable"],
                            autoStart: true,
                            loop: true,
                            
                        }}
                        />
                    </span>
                </p>
            </div>
        </div>
    );
};

export default TypeWriter;