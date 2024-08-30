import React from 'react'

import { services } from '../../Data';
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from '../../assets/shape-2.png';
import shapeOne from '../../assets/shape-1.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import './Projects.css';



const Projects = () => {
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title text-cs">What I Do</h2>
            <p className="section__subtitle">
            My  <span>Intřests</span>
            </p>


            <Swiper 
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]} className="projects__container container mySwiper">
                {services.map(({name, title, description}, index) => {
                    return(
                        <SwiperSlide className="projects__item card card-one" key={index}>
                            <span className="projects__subtitle text-cs">{name}</span>
                            <h3 className="projects__title">{title}</h3>
                            <p className="project__description">{description}</p>

                            <a href="" className="link">
                                Know MÓre 
                                <FaArrowRight className='link__icon'></FaArrowRight>
                            </a>

                                <img src={shapeTwo} alt="" className="shape c__shape" />

                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className="shape" />
        </div>
    </section>
  )
}

export default Projects