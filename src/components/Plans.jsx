import React from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { GoXCircleFill } from 'react-icons/go';

const Plans = () => {
    return (
        <div className='my-10'>
            <div className='py-10 text-center'>
                <h1 className='text-4xl font-semibold mb-2'>Our Social Media Management Plans.</h1> 
                <p>Explore our budget-friendly social media management bundles</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 mx-32 gap-10'>
                <div className='text-[#024963] border-4 border-[#024963] rounded-2xl p-10'>
                    <h1 className="text-4xl font-bold text-center">Affordable</h1>
                    <h2 className="text-2xl font-bold text-center mt-2 mb-4">£49/month</h2>
                    <p className="text-center text-sm">For startups on a tight budget.</p>

                    <div className='my-4 flex flex-col gap-2'>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> High-Quality Visuals</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> 2 Posts Per Week</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Captions & Hashtags</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Scheduling & Posting</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Facebook</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Instagram</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Twitter</p>
                        <p className='flex gap-2 items-center text-sm'> <GoXCircleFill/>    Linkedin</p>
                        <p className='flex gap-2 items-center text-sm'> <GoXCircleFill />   Tik Tok</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> UK-Based Content Creator</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Add-On Services Available</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Monthly Rolling Plan</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Email Support</p>
                    </div>
                    
                    <div className='btn w-full bg-[#f7b141] text-[#024963] font-bold'>
                        SIGN UP NOW
                    </div>
                </div>
                <div className='text-[#024963] bg-[#f7b141] rounded-2xl p-10'>
                    <h1 className="text-4xl font-bold text-center">Value</h1>
                    <h2 className="text-2xl font-bold text-center mt-2 mb-4">£99/month</h2>
                    <p className="text-center text-sm">Great for small businesses.</p>

                    
                    <div className='my-4 flex flex-col gap-2'>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> High-Quality Visuals</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> 2 Posts Per Week</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Captions & Hashtags</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Scheduling & Posting</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Facebook</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Instagram</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Twitter</p>
                        <p className='flex gap-2 items-center text-sm'> <GoXCircleFill/>    Linkedin</p>
                        <p className='flex gap-2 items-center text-sm'> <GoXCircleFill />   Tik Tok</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> UK-Based Content Creator</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Add-On Services Available</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Monthly Rolling Plan</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Email Support</p>
                    </div>
                    
                    <div className='btn w-full bg-[#024963] text-[#f7b141] font-bold border-0'>
                        SIGN UP NOW
                    </div>
                </div>
                <div  className='text-white bg-[#024963] rounded-2xl p-10'>
                    <h1 className="text-4xl font-bold text-center">Ultimate</h1>
                    <h2 className="text-2xl font-bold text-center mt-2 mb-4">£149/month</h2>
                    <p className="text-center text-sm">More graphics and content</p>

                    
                    <div className='my-4 flex flex-col gap-2'>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> High-Quality Visuals</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> 2 Posts Per Week</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Captions & Hashtags</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Scheduling & Posting</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Facebook</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Instagram</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Twitter</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Linkedin</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Tik Tok</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> UK-Based Content Creator</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Add-On Services Available</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Monthly Rolling Plan</p>
                        <p className='flex gap-2 items-center text-sm'> <FaRegCircleCheck/> Email Support</p>
                    </div>
                    
                    <div className='btn w-full bg-white text-[#024963] font-bold'>
                        SIGN UP NOW
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;