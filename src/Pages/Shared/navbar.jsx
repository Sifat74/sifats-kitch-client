import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import '../Shared/Navbar.css'
const Navbar = () => {
    const links = <>
        <li className='hover:text-xl hover:text-[#F01543]'><NavLink to={'/'}>Home</NavLink> </li>
        <li className='hover:text-xl hover:text-[#F01543]'><NavLink to={'/later'}>Booking</NavLink ></li>
        <li className='hover:text-xl hover:text-[#F01543]'><NavLink to={'/later'}>Set Menu</NavLink ></li>
        <li className='hover:text-xl hover:text-[#F01543]'><NavLink to={'/later'}>Add Items</NavLink ></li>
    </>
    return (
        <nav className="w-full h-20 bg-[#000C28]">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className='flex h-20 items-center'>
                    <img src={logo} className='w-32 md:w-40' />
                </div>
                {/* Menu options */}
                <div className='order-first md:-order-none'>
                    <ul className='hidden md:flex gap-6 font-semibold text-white'>
                        {links}
                    </ul>
                    <div className='block md:hidden shrink'>
                        {/* <IoMdMenu className='text-3xl text-[#F01543]'></IoMdMenu> */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none p-0 text-3xl text-[#F01543]"><IoMdMenu></IoMdMenu></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#000C28] rounded-box w-52 text-[#F01543]">
                                {
                                    links
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Login,Signup and Cart */}
                <div className='flex md:gap-2 items-center'>
                    <div className='hidden md:flex gap-2'>
                        <Link><button className='btn btn-outline border-[#F01543] text-[#F01543] text-lg font-medium hover:bg-white hover:text-[#F01543]'>Login</button></Link>
                        <Link><button className='btn bg-[#F01543] text-lg font-medium text-white border-none hover:bg-white hover:text-[#F01543]'>SignUp</button></Link>
                    </div>
                    <div className='md:hidden'>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none p-0 text-3xl text-[#F01543]"><FaUserCircle></FaUserCircle></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#000C28] rounded-box w-52 text-[#F01543]">
                                <li><Link>Login</Link></li>
                                <li><Link>SignUp</Link></li>
                            </ul>
                        </div>
                    </div>
                    <CiShoppingCart className='text-[#F01543] md:ml-4 md:text-white md:hover:text-[#F01543] text-4xl font-bold'></CiShoppingCart>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;