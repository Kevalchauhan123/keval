import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image from '../assets/image.png'
import { PiLinkedinLogoThin } from "react-icons/pi";
import { PiGithubLogoThin } from "react-icons/pi";
import { PiBehanceLogoThin } from "react-icons/pi";
import { PiQuestionThin } from "react-icons/pi";
import { PiArrowCircleUpRightThin } from "react-icons/pi";
import { BiLogoNodejs } from "react-icons/bi";
import { DiPhp } from "react-icons/di";
import { CiMail } from "react-icons/ci";
import { LiaHtml5 } from "react-icons/lia";
import { BiLogoReact } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { Link } from 'react-router-dom';
import Nav from './Nav';
// import shape from '../assets/shape.svg'


function Home() {
  return (
    <div className='mt-1'>
      <div className='row'>
        <div className='col-12 col-md-6 ps-4'>
          <div className="card sticky-col">
            <img src={image} height="1000px" width="100%" className='profile-image' />
            <Nav /> 
            {/* <div className='fixed-nav'>
              <div className="custom-navbar">
                <nav>
                  <div className='custom-nav'>
                    <div className='custom-nav-child'>
                      <div className='custom-nav-children'>
                        <div>
                          <a className='logo text-decoration-none'>
                            <Link to="/" className='text-decoration-none' >
                              Keval
                            </Link>
                          </a>
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
            </div> */}
          </div>
        </div>
        <div className='col-12 col-md-6 ps-0 pe-4 left-container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-8 about-me-card mb-2'>
              <div className="card pb-1">
                <div className="m-3 p-4">
                  <div className='d-flex align-items-center justify-content-start pb-3 pt-3'>
                    <div className="me-4">
                      <img src={image} width="70" height="70" className='rounded-circle' />
                    </div>
                    <div>
                      <div className='my-name'>Keval Chauhan</div>
                      <span className='my-designation'>Web Developer</span>
                    </div>
                  </div>
                  <div className='about-me small mt-5 pt-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis eligendi fugiat exercitationem rem ab iusto sed, odio maiores voluptatum.
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-4'>
              <div className="icon-card card mb-2 p-1">
                <div className="m-3 small d-flex align-items-center justify-content-between">
                  <div className='icon-text'>
                    LinkedIn
                  </div>
                  <div className="icon">
                    <PiLinkedinLogoThin fontSize="1.2em" />
                  </div>
                </div>
              </div>
              <div className="icon-card card mb-2 p-1">
                <div className="m-3 small d-flex align-items-center justify-content-between">
                  <div className='icon-text'>
                    GitHub
                  </div>
                  <div className="icon">
                    <PiGithubLogoThin fontSize="1.2em" />
                  </div>
                </div>
              </div>
              <div className="icon-card card mb-2 p-1">
                <div className="m-3 small d-flex align-items-center justify-content-between">
                  <div className='icon-text'>
                    Behance
                  </div>
                  <div className="icon">
                    <PiBehanceLogoThin fontSize="1.2em" />
                  </div>
                </div>
              </div>
              <div className="icon-card card mb-2 p-1">
                <div className="m-3 small d-flex align-items-center justify-content-between">
                  <div className='icon-text'>
                    Email
                  </div>
                  <div className="icon">
                    <CiMail fontSize="1.2em" />
                  </div>
                </div>
              </div>
              <div className="icon-card card mb-2 p-1">
                <div className="m-3 small d-flex align-items-center justify-content-between">
                  <div className='icon-text'>
                    Contact Me
                  </div>
                  <div className="icon">
                    <PiQuestionThin fontSize="1.2em" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card p-5'>
            <div className='d-flex justify-content-between'>
              <p className='about-text'>About </p>
              <div className='ms-5 next-icon'><PiArrowCircleUpRightThin fontSize="2.5em" /></div>
            </div>
            <div className='about-me small mt-5 pt-5 pe-4'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis eligendi fugiat exercitationem rem ab iusto sed, odio maiores voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p>
                Error facilis eligendi fugiat exercitationem rem ab iusto sed, odio maiores voluptatum.
                Error facilis eligendi fugiat exercitationem rem ab iusto sed, odio maiores voluptatum.
                Error facilis eligendi fugiat exercitationem rem ab iusto sed, odio maiores voluptatum.
              </p>
              <p>
                Error facilis eligendi fugiat exercitationem rem ab iusto sed, odio maiores voluptatum.
              </p>
            </div>
          </div>
          <div className='contact-card card p-3 px-5 mt-2'>
            <Link to="/contact" className='text-decoration-none' >
              <div className='d-flex justify-content-between align-items-center'>
                <div className='fs-4'>Contact Me </div>
                <span className='ms-5 next-icon'><PiArrowCircleUpRightThin fontSize="1.5em" /></span>
              </div>
            </Link>
          </div>
          <div className='d-lg-flex'>
            <div className='skill-card card p-3 px-5 mt-2 me-2 w-100'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='fs-4'>NodeJs </div>
                <span className='ms-5 next-icon'><BiLogoNodejs fontSize="1.5em" /></span>
              </div>
            </div>
            <div className='skill-card card p-3 px-5 mt-2 w-100'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='fs-4'>PHP - Yii2</div>
                <span className='ms-5 next-icon'><DiPhp fontSize="1.5em" /></span>
              </div>
            </div>
          </div>
          <div className='d-lg-flex'>
            <div className='skill-card card p-3 px-5 mt-2 me-2 w-100'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='fs-4'>React</div>
                <span className='ms-5 next-icon'><BiLogoReact fontSize="1.5em" /></span>
              </div>
            </div>
            <div className='skill-card card p-3 px-5 mt-2 w-100'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='fs-4'>HTML, Bootstrap</div>
                <span className='ms-5 next-icon'><LiaHtml5 fontSize="1.5em" /></span>
              </div>
            </div>
          </div>
          <div className='d-lg-flex'>
            <div className='skill-card card p-3 px-5 mt-2 me-2 w-100'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='fs-4'>SQL</div>
                <span className='ms-5 next-icon'><SiMysql fontSize="1.5em" /></span>
              </div>
            </div>
            <div className='skill-card card p-3 px-5 mt-2 w-100'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='fs-4'>HTML, Bootstrap</div>
                <span className='ms-5 next-icon'><LiaHtml5 fontSize="1.5em" /></span>
              </div>
            </div>
          </div>
          <div className='footer card p-5 mt-2'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center justify-content-start pb-3 pt-3'>
                <div className="me-4">
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
                  About
                </ul>
                <ul className='small text-secondary'>
                  Work
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
        </div>
      </div>
    </div >
  );
}

export default Home;
