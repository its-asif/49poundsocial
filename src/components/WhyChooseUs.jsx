import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const WhyChooseUs = ({img, title, description, indx}) => {
    return (
        <div>
            <div className={`my-8 md:py-16 grid grid-cols-1 md:grid-cols-2 ${ !(indx%2) && `bg-[#024963] text-white`}`}>
                <div className={`${ !(indx%2) && `order-2`}`}  
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >
                    <img src={img} alt="" 
                    className={`
                        w-full h-[300px] md:max-h-[400px] object-cover ${ !(indx%2) ? `rounded-l-3xl ` : `rounded-r-3xl` }
                    `} />
                </div>

                <div className={`flex flex-col gap-4 md:gap-8 mx-2 md:mx-10 justify-center my-4 ${ !(indx%2) && `order-1`}`}>
                    <h6 className="text-lg font-bold " >
                        Why Choose us?
                    </h6>

                    <h1 className="text-2xl md:text-4xl font-bold border-l-2 border-l-[#f7b141] pl-4" >
                        {title}
                    </h1>

                    <p className="text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;