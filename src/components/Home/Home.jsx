import React from 'react'
import './Home.css'
import profileImg from '../../assets/pro.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFigma } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import CV from '../../assets/resume_asis.pdf';

const Home = () => {
  return (
    <section className="home" id='home'>
        <div className="home__wrapper">
        <div className="home__container container">
            <p className="home__subtitle text-cs">
                HELLO, <span className='xyz'>MY NAME IS</span>
            </p>

            <h1 className="home__title text-cs">
                <span>ASIS KUMAR</span> DANDAPAT
            </h1>

            <p className="home__job">
                <span className="text-cs">I Am</span> <b>Web Developer, Ui/Ux Developer</b>
            </p>

            <div className="home__img-wrapper">
                <div className="home__banner">
                    <img src={profileImg} alt="" className='home__profile' />
                </div>

                <p className="home__data home__data-one">
                    <span className="text-lg">
                        {' '} 10 <b>+</b>
                    </span>
                    <span className="text-sm text-cs">
                        {' '} Projects On <b>Web Design</b>
                    </span>
                </p>

                
                <img src={shapeTwo} alt="" className="shape shape__2" />
                <img src={shapeTwo} alt="" className="shape shape__3" />
            </div>
            <p className="home__text">
            
                A creative coder with a penchant for responsive web design, I present a portfolio encompassing projects across various programming languages, predominantly in JS. Emphasizing an interest in UX/UI skills, my work showcases an intuitive approach to interface design using the latest web technologies.</p>

            <div className="home__socials">
                <a href='https://linkedin.com/in/asis-kumar-dandapat-b628a32b1' className="home__social-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>

                <a href='mailto:asiskumardandapat90@gmail.com' className="home__social-link" target="_blank" rel="noopener noreferrer">
                    <IoIosMail />
                </a>

                <a href='https://www.figma.com/@asiskumardandap' className="home__social-link" target="_blank" rel="noopener noreferrer">
                    <FaFigma />
                </a>

                <a href='https://www.behance.net/' className="home__social-link" target="_blank" rel="noopener noreferrer">
                    <FaBehance />
                </a>
            </div>

            <div className="home__btns">
                <a download = '' href={CV} className="btn text-cs">Download CV</a>
                <a href="#skills" className="hero__link text-cs">My Skils</a>
            </div>

        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
        </div>
        </div>
    </section>
  )
}

export default Home