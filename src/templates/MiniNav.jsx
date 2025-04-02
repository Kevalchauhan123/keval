import React, { useState } from 'react';
import shape from '../assets/shape.svg';
import image from '../assets/image.png'
import minishape from '../assets/mininav.svg';
import { Link } from 'react-router-dom';

function MiniNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOffCanvas = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed-mininav">
            <div className="custom-mininavbar">
                <nav>
                    <div className="custom-mininav">
                        <div className="custom-mininav-child">
                            <div className="custom-mininav-children">
                                <div>
                                    <Link className="logo text-decoration-none" onClick={toggleOffCanvas}>
                                        Menu
                                    </Link>
                                </div>
                            </div>
                            <div className="framer-1e9gdwz" data-framer-name="Rounded Edge">
                                <div className="right-mininav">
                                    <div>
                                        <img src={minishape} alt="" />
                                    </div>
                                </div>
                                <div className="left-mininav">
                                    <div>
                                        <img src={shape} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Off-canvas menu */}
            {isOpen && (
                <div className="offcanvas-menu">
                    <div className="offcanvas-content">
                        <button className="close-btn" onClick={toggleOffCanvas}>×</button>
                        <div className='d-flex align-items-center justify-content-start pb-3 pt-3'>
                            <div className="me-4">
                                <img src={image} width="50px" height="50px" className='rounded-circle' />
                            </div>
                            <div>
                                <div className='my-name'>Keval Chauhan</div>
                                <span className='my-designation'>Web Developer</span>
                            </div>
                        </div>
                        <ul>
                            <div className="card mb-2">
                                <Link to="/" className='logo text-decoration-none' >
                                    <div className="m-3 small d-flex align-items-center justify-content-between">
                                        <div className='icon-text'>
                                            Home
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="card mb-2">
                                <Link to="/about" className='logo text-decoration-none' >
                                    <div className="m-3 small d-flex align-items-center justify-content-between">
                                        <div className='icon-text'>
                                            About
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="card mb-2">
                                <Link to="/contact" className='logo text-decoration-none' >
                                    <div className="m-3 small d-flex align-items-center justify-content-between">
                                        <div className='icon-text'>
                                            Contact
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="card mb-2">
                                <Link to="/work" className='logo text-decoration-none' >
                                    <div className="m-3 small d-flex align-items-center justify-content-between">
                                        <div className='icon-text'>
                                            Work
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MiniNav;
