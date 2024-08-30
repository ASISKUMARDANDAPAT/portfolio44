import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFigma } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container socials grid">
        <div className="footer__socials">
                <a href="" className="footer__social-link">
                    <FaLinkedin />
                </a>

                <a href="" className="footer__social-link">
                    <IoIosMail />
                </a>

                <a href="" className="footer__social-link">
                    <FaFigma />
                </a>

                <a href="" className="footer__social-link">
                    <FaBehance />
                </a>
            </div>

            <p className="footer__copyright text-cs"> &copy; <span>2024 </span>. All rights Reserved</p>

            <p className="footer__copyright text-cs">Developed by  <span>ASIS KUMAR DANDAPAT</span></p>
        </div>
    </footer>
  )
}

export default Footer