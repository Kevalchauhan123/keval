import React from 'react';
import shape from '../assets/shape.svg'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='fixed-nav'>
            <div className="custom-navbar">
                <nav>
                    <div className='custom-nav'>
                        <div className='custom-nav-child'>
                            <div className='custom-nav-children'>
                                <div>
                                    <Link to="/" className='logo text-decoration-none' >
                                        Keval
                                    </Link>
                                </div>
                                <div className='framer-1qw413d'>
                                    <div>
                                        <Link to="/" className='text-decoration-none' >
                                            home
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/about" className='text-decoration-none'>
                                            About
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/contact" className='text-decoration-none' >
                                            Contact
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/work" className='text-decoration-none' >
                                            Work
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="framer-1e9gdwz" data-framer-name="Rounded Edge" >
                                <div className='right-nav'>
                                    <div>
                                        <img src={shape} alt="" />
                                    </div>
                                </div>
                                <div className='left-nav'>
                                    <div>
                                        <img src={shape} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Nav

