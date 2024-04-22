
const Navbar = () => {

    const subNavs = (
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-white text-[#024963] rounded-box w-max">
            <li className="px-3 cursor-pointer">
                <div>Social Media Management</div>
            </li>
            <li className="px-3 cursor-pointer">
                <div>Social Media Marketing</div>
            </li>
            <li className="px-3 cursor-pointer">
                <div>SEO Blogs</div>
            </li>
            <li className="px-3 cursor-pointer">
                <div>Branding & Design</div>
            </li>
            <li className="px-3 cursor-pointer">
                <div>Resell</div>
            </li>
            <li className="px-3 cursor-pointer">
                <div>Referral Scheme</div>
            </li>
        </ul>
    );

    const navs = (
        <>
            <li><a>OUR STORY</a></li>
            <li>
                <details>
                <summary> <a>WHAT WE DO </a> </summary>
                    {subNavs}
                </details>
            </li>
            <li><a> SAMPLES </a></li>
            <li><a> CONTACT </a></li>
            <li><a> SIGN IN </a></li>
        </>
    )


    return (
        <>
            <div className="navbar bg-[#024963] text-white lg:px-10">
                <div className='navbar-start'>

                    <div className="block lg:hidden">
                        <div className="dropdown ">
                            <div tabIndex={0}  className="btn btn-ghost ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>

                            {/* minimized */}
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52">
                                {navs}
                            </ul>
                        </div>
                    </div>

                    <a className="btn btn-ghost text-xl">
                        <img src="logo.webp" alt="logo" className="w-32 md:w-40" />
                    </a>
                </div>
                
                <div className="navbar-end hidden lg:flex w-full">
                    <ul className="menu menu-horizontal px-1 font-semibold text-lg">
                        {navs}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;