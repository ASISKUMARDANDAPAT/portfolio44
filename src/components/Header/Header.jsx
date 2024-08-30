import React, { useEffect, useState } from 'react';
import './Header.css';
import { links } from '../../Data';
import { Link } from 'react-scroll';
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFigma } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { BsSun, BsMoon } from 'react-icons/bs';
import { animateScroll } from 'react-scroll';

const getStorageTheme = () =>{
    let theme = 'light-theme';
    if(localStorage.getItem('theme')){
        theme =localStorage.getItem('theme');
    }
}

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const [scrollNav, setScrollNav] = useState(false);

    const [theme, setTheme] = useState(getStorageTheme());

    const scrollTop = () =>{
        animateScroll.scrollToTop();
    }


    const changeNav = () =>{
        console.log('scrolling')
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    const toggleTheme = () =>{
        if(theme === 'light-theme'){
            setTheme('dark-theme')
        }
        else{
            setTheme('light-theme')
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu] );

    useEffect(() => {
        document.documentElement.className= theme;
        localStorage.setItem('theme', theme)
    }, [theme]);

    return (
        <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
            <nav className="nav">
                <Link to='/' onClick={scrollTop} className="nav__logo text-cs">
                ᗩKᗪ
                </Link>

                <div className={`${showMenu ? 'nav__menu show__menu' : 'nav__menu'}`}>
                    <div className="nav__data">
                        <ul className="nav__list">
                            {links.map(({ name, path }, index) => {
                                return (
                                    <li className="nav__item" key={index}>
                                        <Link
                                        className='nav__link text-cs'
                                        activeClass="active"
                                        to={path}
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        offset={-150}
                                        duration={500}
                                        onClick={() => {
                                            setShowMenu(!showMenu);
                                        }}
                                        >
                                        {name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="header__socials">
                            <a href='https://www.linkedin.com/in/nirakar-nanda-569329247' className="home__social-link" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>

                            <a href='mailto:nirakarnanda1@gmail.com' className="home__social-link" target="_blank" rel="noopener noreferrer">
                                <IoIosMail />
                            </a>

                            <a href='https://www.playbook.com/s/nirakar-nanda/NkRQqCAnFCT42KB6AU1xgtz4' className="home__social-link" target="_blank" rel="noopener noreferrer">
                                <FaFigma />
                            </a>

                            <a href='https://www.behance.net/' className="home__social-link" target="_blank" rel="noopener noreferrer">
                                <FaBehance />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="nav__btns">
                    <div className="theme__toogle" onClick={toggleTheme}>
                        {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                    </div>

                    <div
                         className={`${showMenu ? 'nav__toggle animate-toggle show__menu' : 'nav__toggle'}`}
                        onClick={() => {
                            setShowMenu(!showMenu);
                        }}
                    >
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
