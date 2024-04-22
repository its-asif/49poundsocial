import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-[#024963] px-20 pt-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6">
                    <h1
                        className="text-3xl font-bold text-white"
                    > <span className="text-[#f7b141]"> Get More, Pay Less</span> It's All In Our Jam-Packed Plans!</h1>

                    <div className="bg-[#f7b141] my-4 w-fit p-4 pr-32 rounded-2xl"> 
                        <h1 className="text-3xl font-bold text-[#024963]">From £49 P/M</h1>
                    </div>

                    <p className="text-white text-xs">Affordable social media management, dynamic blog content, and strategic social media marketing solutions. Small price, big impact!</p>
                </div>

                <div className="grid grid-cols-2 text-white px-10 pt-6">

                    <div className="flex flex-col gap-2">
                        <h1 className="cursor-pointer font-extrabold text-[#f7b141]">Useful Links</h1>
                        <h1 className="cursor-pointer text-sm hover:text-[#f7b141]">Blog</h1>
                        <h1 className="cursor-pointer text-sm hover:text-[#f7b141]">Privacy Policy</h1>
                        <h1 className="cursor-pointer text-sm hover:text-[#f7b141]">Terms & Conditions</h1>
                        <h1 className="cursor-pointer text-sm hover:text-[#f7b141]">Contact Us</h1>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <h1 className="cursor-pointer font-extrabold text-[#f7b141]">Connect With Us</h1>
                        <img src="logo.webp" alt="logo" className="w-40" />
                        
                        <h1 className="flex gap-2 cursor-pointer text-sm hover:text-[#f7b141]"><CiMail className="mt-1"/> hello@49poundsocial.co.uk</h1>
                        <h1 className="flex gap-2 cursor-pointer text-sm hover:text-[#f7b141]"><FaLocationDot className="mt-1"/> 5 Brayford Square, LONDON E1 0SG</h1>
                        <div className="flex gap-4">
                            <RiFacebookCircleFill className="cursor-pointer text-[#f7b141] hover:text-lg"/>
                            <FaInstagram className="cursor-pointer text-[#f7b141] hover:text-lg"/>
                            <PiTiktokLogo className="cursor-pointer text-[#f7b141] hover:text-lg"/>
                            <BsTwitterX className="cursor-pointer text-[#f7b141] hover:text-lg"/>
                            <FaLinkedin className="cursor-pointer text-[#f7b141] hover:text-lg"/>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="w-full"/>
            <p className="text-[#f7b141] text-center text-xs py-6">© Copyright 49 Pound Social – part of Aethon group Ltd Company number 15520393</p>
        </div>
    );
};

export default Footer;