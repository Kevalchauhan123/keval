import React, { useState } from 'react';
// import axios from 'axios';
import { CiMail } from "react-icons/ci";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { PiGithubLogoThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import image from '../assets/contact-us.jpg'
import Nav from './Nav';
import MiniNav from './MiniNav';
import Scroll from './Scroll';
import Footer from './Footer';
import { Link } from 'react-router-dom';


function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const sentEmail = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:5173/contact', formData);
    //         alert('Message sent successfully!');
    //     } catch (e) {
    //         alert(`Error sending message ${e}`);
    //     }
    // };

    return (
        <div className='row'>
            <div className='col-12 col-md-6 '>
                <div className='left-container'>

                    <div className="card sticky-col">
                        <img src={image} width="100%" className='contact-us-image' />
                        <Nav />
                        <MiniNav />
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div className='card'>
                    <div className="m-3 p-md-4 mb-3 mb-md-5">
                        <p className="h1 mt-3">Let's Talk</p>
                    </div>
                    <div className='mb-5 contact-form'>
                        <form >
                            <div className='d-md-flex mx-3 mx-md-5'>
                                <div className="form-group w-100 mb-md-0 mb-2 me-md-4">
                                    <input type="name" className="form-control" id="exampleInputName" onChange={handleChange} aria-describedby="emailHelp" placeholder="Your Name" />
                                </div>
                                <div className="form-group w-100">
                                    <input type="email" className="form-control" onChange={handleChange} id="exampleInputEmail1" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="form-group mx-3 mx-md-5 mt-3">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <div className="text-center mt-4 mx-3 mx-md-5">
                                <button type="submit" className='btn btn-light w-100'> Send Message </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='d-md-flex'>
                    <div className='card mt-2 p-1 skill-card w-100 me-2'>
                        <Link to="mailto:keval.k.chauhan@gmail.com" target='_blank' className='logo text-decoration-none' >

                            <div className="m-3 small d-flex align-items-center justify-content-between">
                                <div className='icon-text'>
                                    Email
                                </div>
                                <div className="icon">
                                    <CiMail fontSize="1.2em" />
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className='card mt-2 p-1 skill-card w-100'>
                        <Link to="tel:+918799153326" target='_blank' className='logo text-decoration-none' >
                            <div className="m-3 small d-flex align-items-center justify-content-between">
                                <div className='icon-text'>
                                    Phone
                                </div>
                                <div className="icon">
                                    <PiPhoneThin fontSize="1.2em" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="d-md-flex w-100">
                    <div className='card mt-2 p-1 skill-card w-100 me-2'>
                        <Link to="https://github.com/kevalchauhan123" target='_blank' className='logo text-decoration-none' >
                            <div className="m-3 small d-flex align-items-center justify-content-between">
                                <div className='icon-text'>
                                    GitHub
                                </div>
                                <div className="icon">
                                    <PiGithubLogoThin fontSize="1.2em" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='card mt-2 p-1 skill-card w-100'>
                        <Link to="https://linkedin.com/in/keval-chauhan-1a37342b4" target='_blank' className='logo text-decoration-none' >
                            <div className="m-3 small d-flex align-items-center justify-content-between">
                                <div className='icon-text'>
                                    LinkedIn
                                </div>
                                <div className="icon">
                                    <PiLinkedinLogoThin fontSize="1.2em" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='card mt-2 p-1 skill-card w-100'>
                    <div className="m-3 small d-flex align-items-center justify-content-between">
                        <div className='icon-text'>
                            Ahmedabad, Gujarat, India
                        </div>
                        <div className="icon">
                            <CiLocationOn fontSize="1.2em" />
                        </div>
                    </div>
                </div>
                <div>
                    <Scroll />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;
