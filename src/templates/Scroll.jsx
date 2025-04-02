import React from 'react';
import { BiLogoNodejs } from "react-icons/bi";
import { DiPhp } from "react-icons/di";
import { LiaHtml5 } from "react-icons/lia";
import { BiLogoReact } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
// import { Link } from 'react-router-dom';

function Scroll() {
    return (
        <div className='card card-scroll scroll-wrapper'>
            <div className="marquee-container">
                <div className="marquee-content">
                    <span className='ms-5 icon'><BiLogoNodejs fontSize="2em" /></span>
                    <span className='ms-5 icon'><DiPhp fontSize="2em" /></span>
                    <span className='ms-5 icon'><LiaHtml5 fontSize="2em" /></span>
                    <span className='ms-5 icon'><BiLogoReact fontSize="2em" /></span>
                    <span className='ms-5 icon'><SiMysql fontSize="2em" /></span>
                    <span className='ms-5 icon'><BiLogoNodejs fontSize="2em" /></span>
                    <span className='ms-5 icon'><DiPhp fontSize="2em" /></span>
                    <span className='ms-5 icon'><LiaHtml5 fontSize="2em" /></span>
                    <span className='ms-5 icon'><BiLogoReact fontSize="2em" /></span>
                    <span className='ms-5 icon'><SiMysql fontSize="2em" /></span>
                </div>
            </div>
        </div>
    )
}
export default Scroll
