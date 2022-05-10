import React, {useState} from "react";
import "../Banner/banner.css";
import first_Slider from "../../assets/video/introduce-video.mp4"
import twice_Slider from "../../assets/video/Celebrity.mp4"
import third_Slider from "../../assets/video/화보 스케치 비하인드.mp4"
import Navbar from "../navbar/navbar"

const News = () => {

  const [menuClick, menuOnclick] = useState("#introduce");

  return (

    <div className="banner-container">
    <Navbar/>
    <div className = "Slider-banner">

      <div className = "slider-container">
        <div id = "Slider-container-box" className={menuClick==="#introduce" ? "active" : ""}>
          <video src = {first_Slider} autoPlay loop muted/>
          <div id = "Slider-contents" className={menuClick==="#introduce" ? "active" : ""}>
          <div className = "inner-contents">
        <h1>PROFILE</h1>
        <p>국민 여동생에서 국민 만능엔터테이너까지의 과정을 모두 담았습니다. </p>
        </div>
        </div>
        </div>

        <div id = "Slider-container-box" className={menuClick==="#GALLARY" ? "active" : ""}>
          <video src = {twice_Slider} autoPlay loop muted/>
          <div id = "Slider-contents" className={menuClick==="#GALLARY" ? "active" : ""}>
          <div className = "inner-contents">
        <h1>MUSIC</h1>
        <p>데뷔 앨범 및 앨범 수록곡들을 지금 바로 확인해보세요.</p>
        </div>
        </div>
        </div>

        
        <div id = "Slider-container-box" className={menuClick==="#NEWS" ? "active" : ""}>

          <video src = {third_Slider} autoPlay loop muted/>

          <div id = "Slider-contents" className={menuClick==="#NEWS" ? "active" : ""}>
          <div className = "inner-contents">
        <h1>GALLARY</h1>
        <p>다양한 화보와 일상 앨범 화보들을 <br></br> IYOU GALLARY에서 확인해보세요.</p>
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
    </div>
  );
};

export default News;
