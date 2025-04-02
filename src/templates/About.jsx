import React from 'react';
import image from '../assets/about.jpeg'
import profile from '../assets/image.png'
import Nav from './Nav';
import MiniNav from './MiniNav';

import { PiQuestionThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { PiArrowCircleUpRightThin } from "react-icons/pi";
import Footer from './Footer';
import Scroll from './Scroll';

function About() {
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
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-12 mb-2'>
                        <div className="card pb-1">
                            <div className="m-3 p-md-4">
                                <div className='d-flex align-items-center justify-content-start pb-3 pt-3'>
                                    <div className="me-4">
                                        <img src={profile} width="70" height="70" className='rounded-circle' />
                                    </div>
                                    <div>
                                        <div className='my-name'>Keval Chauhan</div>
                                        <span className='my-designation'>Web Developer</span>
                                    </div>
                                </div>
                                <div className='about-me small mt-5 pt-4'>
                                    I'm a Keval Chauhan, a Software Engineer based in Gujrat, India. I have a passion for building performant, scalable user interfaces. I have proficiency in technologies like React.js, Node.js, Php, Yii2, and Java. I have B.Tech degree in Computer Science and Engineering from LJ University Ahmedabad, and I am currently working as a Web Developer.

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card p-3 p-md-5 order-md-0 '>
                    <div className='d-flex justify-content-between'>
                        <p className='about-text'>About </p>
                        <div className='ms-5 next-icon'><PiArrowCircleUpRightThin fontSize="2.5em" /></div>
                    </div>
                    <div className='about-me mt-5 pt-5 pe-md-4'>
                        <p>
                            I’m a passionate and driven individual who believes in continuous learning and innovation. I enjoy exploring new ideas, solving problems, and creating meaningful experiences through technology and creativity.

                            Beyond my work, I have a deep appreciation for art, culture, and self-expression. I love discovering new perspectives, whether through books, travel, or engaging conversations. I believe that every experience shapes us, and I always seek opportunities that challenge me to grow.

                            <p>I value authenticity, creativity, and resilience—qualities that guide both my personal and professional life. Whether I’m working on a project, brainstorming ideas, or simply navigating life, I approach everything with curiosity and a problem-solving mindset.</p>

                            When I’m not working, I enjoy exploring new technologies, traveling, and immersing myself in creative pursuits. I’m always looking for ways to push boundaries, learn new skills, and make a positive impact.

                            If you’d like to connect or collaborate, feel free to reach out—I’d love to hear from you!
                        </p>
                    </div>
                </div>
                <div>
                    <Scroll />
                </div>
                <div className="icon-card card p-1 d-none d-md-flex">
                    <Link to="/contact" className='logo text-decoration-none' >
                        <div className="m-3 small d-flex align-items-center justify-content-between">
                            <div className='icon-text'>
                                Contact Me
                            </div>
                            <div className="icon">
                                <PiQuestionThin fontSize="1.2em" />
                            </div>
                        </div>
                    </Link>
                </div>
                <Footer />
            </div>

        </div>
    )
}
export default About
