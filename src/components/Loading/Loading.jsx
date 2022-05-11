import React from 'react'
import "./Loading.css"
import ClipLoader from "react-spinners/ClipLoader"
import { css } from 'styled-components';
import {motion} from "framer-motion"
import 공연장 from "../../assets/image/콘서트 공연장.jpg"

const Loading = (props) => {

  const detail = css`
  width : 10rem;
  height : 10rem;
  `;

  const dynamicBox = {
    initial : {
      opacity : 1,
    },

    animated : {
      opacity : 1,
      transition : {
        staggerChildren : 0.2,
        delayChildren : 0.5
      }
    }
  }

  const dynamicTxt = {
    initial : {
      opacity : 0,
      y : 40
    },

    animated : {
      opacity : 1,
      y : 0,
      transition : {
        duration : 0.5
      }
    }
  }

  return (
    <div className = "Loading-container">

      <div className = "loading-title">

        <motion.div variants={dynamicBox} initial="initial" animate="animated" className = "Dynamic-title">
        <motion.span variants={dynamicTxt}>I</motion.span>
        <motion.span variants={dynamicTxt}>Y</motion.span>
        <motion.span variants={dynamicTxt}>O</motion.span>
        <motion.span variants={dynamicTxt}>U</motion.span>
        </motion.div>

        <div className = "loading-state">
           <ClipLoader color = {"#fff"} size = {150} loading = {props.loading} css = {detail} />
           </div>

        <motion.p initial = {{opacity : 0, y : 50}} animate = {{opacity : 1, y : 0}} transition = {{delay : 1.2, duration  : 1}}>THE PROFILE SITE</motion.p>

      

      </div>

      <div className = "loading-image">
        <img src = {공연장} alt = ""/>
      </div>

    </div>
  )
}

export default Loading