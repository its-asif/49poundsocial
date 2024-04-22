import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const WhyChooseUs = ({img, title, description, indx}) => {
    return (
        <div>
            <div className={`py-16 grid grid-cols-2 ${ !(indx%2) && `bg-[#024963] text-white`}`}>
                <div className={`${ !(indx%2) && `order-2`}`}  
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >
                    <img src={img} alt="" 
                    className={`
                        w-full max-h-[400px] object-cover ${ !(indx%2) ? `rounded-l-3xl ` : `rounded-r-3xl` }
                    `} />
                </div>

                <div className={`flex flex-col gap-8 mx-10 justify-center ${ !(indx%2) && `order-1`}`}>
                    <h6 className="text-lg font-bold" >
                        Why Choose us?
                    </h6>

                    <h1 className="text-4xl font-bold border-l-2 border-l-[#f7b141] pl-4" >
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