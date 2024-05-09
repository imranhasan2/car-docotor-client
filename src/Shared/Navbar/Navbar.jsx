
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)


    const handleLogout = e =>{
        e.preventDefault()
        logOut()
        .then(() =>{
            console.log('log Out')
        })
        .catch(error => console.error(error))
    }

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Service</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-24 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {user?.email ? <>
                    <Link className='mr-2 btn btn-outline' to='/orders'>My Orders</Link>
                    <button onClick={handleLogout} className='btn btn-outline mr-4'>Log Out</button>
                    </> :
                        <Link to="/login">
                            <button className='mr-4 btn btn-outline'>Log In</button>
                        </Link>
                    }
                </div>
                <a className="btn btn-outline btn-warning">AppointMent</a>
            </div>
        </div>
    );
};

export default Navbar;