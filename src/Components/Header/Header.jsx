import React from 'react';
import logo from '../../../public/cross.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <nav className='flex items-center justify-between px-12 py-3 bg-slate-900 text-white'>
                <div className='flex items-center'>
                    <img className='w-12 mr-2' src={logo} alt="" />
                    <span className='font-bold text-2xl'>HeroElectric</span>
                </div>
                <div>
                    <Link className='px-6 font-bold text-xl hover:text-teal-400' to="/">Home</Link>
                    <Link className='px-6 font-bold text-xl hover:text-teal-400' to="/shop">Shop</Link>
                    <Link className='px-6 font-bold text-xl hover:text-teal-400' to="/cart">
                        <FontAwesomeIcon icon={faCoffee} />
                    </Link>
                    <Link className='px-6 font-bold text-xl hover:text-teal-400' to="/about">About Us</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;