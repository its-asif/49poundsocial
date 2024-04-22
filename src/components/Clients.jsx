import Marquee from "react-fast-marquee";

const Clients = () => {
    return (
        <div className="my-10">
            
            <h1 className="text-3xl font-bold text-center">Platforms We Use To Drive Client Success.</h1>

            <Marquee 
                gradient={false} 
                speed={40} 
                pauseOnHover={true}
            >

                <>
                    <img src="slack.webp" alt="slack" className="w-40 mx-10" />
                </>
                <>
                    <img src="facebook.webp" alt="slack" className="w-40 mx-10" />
                </>
                <>
                    <img src="wordpress.webp" alt="slack" className="w-40 mx-10" />
                </>
                <>
                    <img src="gAnalytics.webp" alt="slack" className="w-40 mx-10" />
                </>
                <>
                    <img src="semrush.webp" alt="slack" className="w-40 mx-10" />
                </>

            </Marquee>

        </div>
    );
};

export default Clients;