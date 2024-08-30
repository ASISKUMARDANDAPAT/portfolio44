import React from 'react';
import { FaArrowRight,FaLaptopCode} from "react-icons/fa";
import shapeTwo from '../../assets/shape-2.png';
import {motion} from 'framer-motion';

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description } = projectItem;
        return (
          <motion.div
          layout
          animate={{opacity:1, scale:1 }}
          initial={{opacity:0.8, scale:0.6}}
            exit={{opacity:0.8, scale:0.6}}
            transition={{duration:0.4}}
           className="portfolio__items card card-two" key={id}>
            <div className="portfolio__img-wrapper">
              <img src={img} alt="" className='portfolio__img' />
            </div>

            <span className="protfolio__category text-cs">{category}</span>
              <h3 className="portfolio__title">{title}</h3>
              <p className="portfolio__description">{description}</p>

              <div className="links">
                <a href="https://github.com/ASISKUMARDANDAPAT/" className="link" target="_blank" rel="noopener noreferrer">
                  Visit Github and Project Platform
                  <FaLaptopCode className='link_icon'></FaLaptopCode>
                  <FaArrowRight className='link_icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
              </div>
            

          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
