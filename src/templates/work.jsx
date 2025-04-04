import React, { useState } from 'react';
import image from '../assets/background.jpg';
import Nav from './Nav';
import MiniNav from './MiniNav';
import Footer from './Footer';
import Scroll from './Scroll';
import { Link } from 'react-router-dom';
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

function Work({ title, subtitle, shortDescription, fullDescription }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="card pb-1 mt-2">
            <div className="m-3 p-md-4">
                <div className="pb-3 pt-3">
                    <div className="fs-4">{title}</div>
                    <div className="text-secondary text-decoration-underline">{subtitle}</div>
                </div>
                <div className="about-me small work-description">
                    {shortDescription}
                    {isExpanded && (
                        <div>
                            <br />
                            {fullDescription}
                        </div>
                    )}
                </div>
                {fullDescription && (
                    <div
                        className="text-end small text-secondary read-more"
                        onClick={toggleDescription}
                        style={{ cursor: 'pointer' }}
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </div>
                )}
            </div>
        </div>
    );
}

function WorkCard() {
    const projects = [
        {
            title: "Bechelor",
            subtitle: "LJ University",
            shortDescription: "C.S.E ( Computer Science and Engineering )",
        },
        {
            title: "Internship",
            subtitle: "Trusol",
            shortDescription: "Web Developer - December 2023 to may 2024",
        },
        {
            title: "Work",
            subtitle: "Trusol",
            shortDescription: "Web Developer - may 2024 to Present",
        },
        {
            title: "Artwork, Artist & Gallery Collaboration Platform",
            subtitle: "Creative Marketplace & Collaboration Platform - php(Yii2)",
            shortDescription: "My work brings artists and galleries together through a dynamic web application. Built with Yii2, this platform enables artists to display their portfolios, manage exhibitions, and connect with galleries for potential collaborations.",
            fullDescription: "This platform allows for seamless interactions between users, offering artist and architect profiles, artwork sales, exhibition management, and a robust search feature for galleries to discover new talent. It’s designed to foster collaboration, enhance visibility, and streamline the creative process.\n\nThe management panel provides administrators with a comprehensive dashboard to manage users, galleries, artworks, and exhibitions with ease. It includes role-based access control (RBAC), ensuring that only authorized users can access certain sections and perform specific actions.\n\nThe platform uses AJAX form submission to enhance user experience by submitting forms asynchronously without refreshing the page. This results in smoother interactions for activities like artwork uploads, exhibition registrations, and profile updates.\n\nFor user authentication and security, the platform includes a login system where users can create accounts, log in, and manage their profiles. The RBAC ensures that different user roles (such as artist, gallery, and admin) have specific permissions and access to various features based on their role, enhancing security and proper workflow management."
        },
        {
            title: "Automated Ticket Booking Bot & Data Scraping Bot",
            subtitle: "Automated Bot",
            shortDescription: "A powerful bot that automates ticket booking processes and scrapes valuable data from multiple websites simultaneously. ",
            fullDescription: "Designed for efficiency, it ensures fast data extraction and seamless booking experiences across various platforms. This sophisticated automation solution leverages advanced scripting techniques to streamline ticket bookings and perform simultaneous data scraping across multiple websites. Built with a focus on speed and accuracy, the bot extracts information such as pricing, availability, and events in real-time. It also automates the booking process, reducing manual intervention and ensuring a smoother user experience. With built-in error handling and optimization for multiple websites, it offers a robust, reliable tool for users looking to stay ahead of time-sensitive opportunities and information."
        },
        {
            title: "Hierarchical Region Management",
            subtitle: "Streamlining Geographic Data with Nested Sets",
            shortDescription: "This project utilizes Yii2's powerful Nested Sets behavior to manage hierarchical region data efficiently.",
            fullDescription: " The system supports the management of multiple geographic levels, from continents to cities, using a single table with hierarchical depth. It provides an intuitive way for administrators to add, update, and organize regions, countries, states, and cities while maintaining a smooth user experience. This platform manages hierarchical region data through the use of Yii2’s Nested Sets behavior, which simplifies the process of storing and retrieving geographically structured data, such as continents, countries, states, and cities, all within a single database table. The Region table includes a depth field that defines the level of the region (e.g., continent, country, state, city). This allows for flexible and efficient handling of geographic data without the need for multiple tables or complex relationships."
        },
        {
            title: "Chat Application using WhatsApp Cloud API",
            subtitle: "Seamless Messaging Platform with WhatsApp Cloud Integration",
            shortDescription: "This project leverages the WhatsApp Cloud API integrated with a Spring Boot backend to create a robust chat application. It supports a wide range of message types, including template messages, flow messages, and button messages, enabling businesses to efficiently communicate with users and automate interactions.",
            fullDescription: "This chat application utilizes Java Spring Boot as the backend framework and integrates the WhatsApp Cloud API to deliver dynamic and interactive messaging capabilities. Designed to streamline communication, the platform allows businesses to send different types of WhatsApp messages such as templates, flow messages, and button messages to users for a more engaging experience."
        },
        {
            title: "Contribution in Booking Platform",
            subtitle: "Revolutionizing Online Bookings for Experiences & Safaris",
            shortDescription: "This project focuses on building an advanced booking platform designed to simplify experience and safari reservations. Leveraging robust features such as real-time availability, secure payments, and an intuitive user interface.",
            fullDescription: " This booking platform is makes booking memorable experiences like safaris, tours, and events seamless for customers worldwide and tailored for booking experiences such as safaris, guided tours, and other adventure activities. It provides an intuitive user interface where users can easily browse, select, and book their desired experiences in real-time. Built with a focus on user experience, the system ensures secure payment integration and immediate booking confirmations for a smooth and reliable booking process."
        },
    ];

    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="left-container">
                    <div className="card sticky-col">
                        <img src={image} width="100%" className="work-image" />
                        <Nav />
                        <MiniNav />
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 mb-2">
                        <div className="card pb-1">
                            <div className="m-3 p-md-4">
                                <div className="d-flex align-items-center justify-content-start pb-3 pt-3">
                                    <div>
                                        <div className="fs-2">Work</div>
                                        <span className="my-designation">Keval Chauhan</span>
                                    </div>
                                </div>
                                <div className="about-me small mt-5 pt-4">
                                    My work engineers seamless digital ecosystems, fusing Yii2 mastery with automation prowess. From intuitive platforms to intelligent data extraction, my creations are robust, adaptive, and meticulously crafted.
                                </div>
                            </div>
                        </div>
                        {projects.map((project, index) => (
                            <Work
                                key={index}
                                title={project.title}
                                subtitle={project.subtitle}
                                shortDescription={project.shortDescription}
                                fullDescription={project.fullDescription}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <Scroll />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default WorkCard;
