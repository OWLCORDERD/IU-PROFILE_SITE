import React, {useState} from "react";
import "../Banner/banner.css";
import first_Slider from "../../assets/video/introduce-video.mp4"
import twice_Slider from "../../assets/video/Celebrity.mp4"
import third_Slider from "../../assets/video/화보 스케치 비하인드.mp4"
import Navbar from "../navbar/navbar"
import {IoIosArrowDroprightCircle} from "react-icons/io"
import { motion } from "framer-motion";

const Banner = () => {

  const [menuClick, menuOnclick] = useState("#introduce");

  const dynamicBanner = {
    initial : {
      opacity : 0,
    },

    animated : {
      opacity : 1,
      transition : {
        delay : 0.1,
        duration : 0.5
      }
    }
  }

  const ContentsBox = {
    initial : {
      opacity : 1,
    },

    animated : {
      opacity : 1,
      transition : {
        staggerChildren : 0.2,
        delayChildren : 0.2
      }
    }
  }

  const ContentsTitle = {
    initial : {
      opacity : 0,
      y : 120
    },
    animated : {
      opacity : 1,
      y : 0,
      transition : {
        duration : 1
      }
    }
  }

  return (

    <motion.div variants={dynamicBanner} initial="initial" animate="animated" className="banner-container">

    <Navbar/>

    <div className = "Slider-banner">

      <div className = "slider-container">

        <div id = "Slider-container-box" className={menuClick==="#introduce" ? "active" : ""}>

          <video src = {first_Slider} autoPlay loop muted/>

          <div id = "Slider-contents" className={menuClick==="#introduce" ? "active" : ""}>

          <motion.div variants={ContentsBox} className = "inner-contents">

        <motion.h1 variants={ContentsTitle} className = "inner-title">PROFILE</motion.h1>
        <motion.div variants={ContentsTitle} className = "inner-view">

        <div className = "view_more">
        <h1>VIEW MORE</h1>
        </div>

        <div className = "play-button">
        <IoIosArrowDroprightCircle/>
        </div>

        </motion.div>

        </motion.div>
        
        </div>

        </div>

        <div id = "Slider-container-box" className={menuClick==="#GALLARY" ? "active" : ""}>

          <video src = {twice_Slider} autoPlay loop muted/>

          <div id = "Slider-contents" className={menuClick==="#GALLARY" ? "active" : ""}>

          <div className = "inner-contents">
            
          <h1 className = "inner-title">MUSIC</h1>
          
          <div className = "inner-view">
            
            <div className = "view_more">
              
              <h1>VIEW MORE</h1>
              
              </div>
              
          <div className = "play-button">
                
          <IoIosArrowDroprightCircle/>
                
          </div>
          
          </div>
          
          </div>
          
          </div>

        </div>

        
        <div id = "Slider-container-box" className={menuClick==="#NEWS" ? "active" : ""}>

          <video src = {third_Slider} autoPlay loop muted/>

          <div id = "Slider-contents" className={menuClick==="#NEWS" ? "active" : ""}>

          <div className = "inner-contents">
            
            <h1 className = "inner-title">GALLARY</h1>
            
            <div className = "inner-view">
              
              <div className = "view_more">
                
                <h1>VIEW MORE</h1>
                
                </div>
                
            <div className = "play-button">
                  
            <IoIosArrowDroprightCircle/>
                  
            </div>
            
            </div>
            
            </div>

        </div>

        </div>

      </div>

      <div className = "Slider-box">

        <div className = "Slider-button">
          <a href = "#" onClick={()=>menuOnclick("#introduce")} className = {menuClick === "#introduce" ? "active" : ""}></a>

          <a href = "#"  onClick={()=>menuOnclick("#GALLARY")} className = {menuClick === "#GALLARY" ? "active" : ""}></a>

          <a href = "#" onClick={()=>menuOnclick("#NEWS")} className = {menuClick === "#NEWS" ? "active" : ""}></a>
        
        </div>

        </div>

    </div>

    </motion.div>
  );
};

export default Banner;
