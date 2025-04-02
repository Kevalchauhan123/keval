import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/image.png'

function Footer() {
    return (
        <div className='footer card p-5 mt-2'>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center justify-content-start pb-3 pt-3'>
                    <div className="icon-text me-5">
                        <img src={image} width="70" height="70" className='rounded-circle' />
                    </div>
                    <div>
                        <div className='my-name'>Keval Chauhan</div>
                        <span className='my-designation'>Web Developer</span>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between footer-content '>
                <div className=' mt-5'>
                    <ul>
                        Pages
                    </ul>
                    <ul className='small text-secondary'>
                        <Link to="/" className='text-decoration-none text-secondary'>
                            Home
                        </Link>
                    </ul>
                    <ul className='small text-secondary'>
                        <Link to="/about" className='text-decoration-none text-secondary'>
                            About
                        </Link>
                    </ul>
                    <ul className='small text-secondary'>
                    <Link to="/work" className='text-decoration-none text-secondary'>
                        Work
                    </Link>
                    </ul>
                    <ul className='small text-secondary'>
                        <Link to="/contact" className='text-decoration-none text-secondary' >
                            Contact
                        </Link>
                    </ul>
                </div>
                <div className='mt-5'>
                    <ul>
                        utility
                    </ul>
                    <ul className='small text-secondary'>
                        <Link to="/404" className='text-decoration-none text-secondary' >
                            404
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer
