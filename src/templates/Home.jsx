import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image from '../assets/image.png'
import { PiLinkedinLogoThin } from "react-icons/pi";
import { PiGithubLogoThin } from "react-icons/pi";
import { PiBehanceLogoThin } from "react-icons/pi";
import { PiQuestionThin } from "react-icons/pi";
import { PiArrowCircleUpRightThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Nav from './Nav';
import MiniNav from './MiniNav';
import Scroll from './Scroll';
import Footer from './Footer';
// import shape from '../assets/shape.svg'

function Home() {
  return (
    <div className=''>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div className='left-container'>
            <div className="card sticky-col">
              <img src={image} height="1000px" width="100%" className='profile-image' />
              <Nav />
              <MiniNav />

            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 mt-2 mt-md-0'>
          <div className='row'>
            <div className='col-12 col-md-12 col-lg-8 mb-2'>
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
                  <div className='about-me small mt-2 pt-4'>
                    I'm a Keval Chauhan, a Software Engineer based in Gujrat, India. I have a passion for building performant, scalable user interfaces. I have proficiency in technologies like React.js, Node.js, Php, Yii2, and Java. I have B.Tech degree in Computer Science and Engineering from LJ University Ahmedabad, and I am currently working as a Web Developer.
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-4 social'>
              <div className="icon-card card mb-2 p-1">
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
              <div className="icon-card card mb-2 p-1">
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
              <div className="icon-card card mb-2 p-1">
                <Link to="https://behance.net/kevalchauhan10" target='_blank' className='logo text-decoration-none' >
                  <div className="m-3 small d-flex align-items-center justify-content-between">
                    <div className='icon-text'>
                      Behance
                    </div>
                    <div className="icon">
                      <PiBehanceLogoThin fontSize="1.2em" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="icon-card card mb-2 p-1">
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
              <div className="icon-card card mb-2 p-1 bg-light ">
                <Link to="/contact"className='logo text-decoration-none' >
                  <div className="m-3 small d-flex align-items-center justify-content-between">
                    <div className='icon-text text-dark'>
                      Contact Me
                    </div>
                    <div className="icon text-dark">
                      <PiQuestionThin fontSize="1.2em" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='card p-5'>
            <div className='d-flex justify-content-between'>
              <p className='about-text'>About </p>
              <Link to="/about" className='logo text-decoration-none' >
              <div className='ms-5 next-icon'><PiArrowCircleUpRightThin fontSize="2.5em" /></div>
              </Link>
            </div>
            <div className='about-me small mt-5 pt-5 pe-4'>
              <p>
                I’m a passionate and driven individual who believes in continuous learning and innovation. I enjoy exploring new ideas, solving problems, and creating meaningful experiences through technology and creativity.
              </p>
              <p>
                Beyond my work, I have a deep appreciation for art, culture, and self-expression. I love discovering new perspectives, whether through books, travel, or engaging conversations. I believe that every experience shapes us, and I always seek opportunities that challenge me to grow.
              </p>
            </div>
          </div>
          <div>
            <Scroll />
          </div>
          <Footer />
        </div>
        
      </div>
    </div >
    
  );
}

export default Home;
