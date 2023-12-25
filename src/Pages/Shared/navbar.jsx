import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="w-full h-20 bg-[#000C28]">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className='flex h-20 items-center'>
                    <img src={logo} className='w-32 md:w-40' />
                </div>
                <div className='flex md;gap-2 items-center'>
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
                    <CiShoppingCart className='text-[#F01543] md:ml-4 md:text-white text-4xl font-bold'></CiShoppingCart>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;