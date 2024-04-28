
import React from 'react'
import IMAGES from '../images'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <navbar className="bg-slate-800 flex items-center justify-between w-full sm:h-20 h-28">
                <div className='flex items-center justify-between sm:flex-row flex-col md:w-5/6 w-full mx-auto px-2 md:px-0'>
                    <div className="logo sm:mb-0 mb-2">
                        <img className='w-56 ' src={IMAGES.LOGO} alt="" />
                    </div>

                    <nav>
                        <ul className='flex'>
                            <li><Link className='text-white hover:text-orange-600 mx-3 px-2 transition-all duration-300 border-b-2 border-transparent hover:border-orange-600' to="/">Home</Link>
                            </li>
                            <li><Link className='text-white hover:text-orange-600 mx-3 px-2 transition-all duration-300 border-b-2 border-transparent hover:border-orange-600' to="/about">About</Link>
                            </li>
                            <li><Link className='text-white hover:text-orange-600 mx-3 px-2 transition-all duration-300 border-b-2 border-transparent hover:border-orange-600' to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </navbar>
        </div >
    )
}

export default Header