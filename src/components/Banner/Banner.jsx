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
        <h1>PROFILE</h1>
        <p>아이유 프로필 사이트에서 총 정리하는 아이유에 대한 모든 것</p>
        </div>
        </div>

        <div id = "Slider-container-box" className={menuClick==="#GALLARY" ? "active" : ""}>
          <video src = {twice_Slider} autoPlay loop muted/>
          <div id = "Slider-contents" className={menuClick==="#GALLARY" ? "active" : ""}>
        <h1>MUSIC</h1>
        <p>데뷔 앨범 및 앨범 수록곡들을 지금 바로 확인해보세요.</p>
        </div>
        </div>

        
        <div id = "Slider-container-box" className={menuClick==="#NEWS" ? "active" : ""}>

          <video src = {third_Slider} autoPlay loop muted/>

          <div id = "Slider-contents" className={menuClick==="#NEWS" ? "active" : ""}>
        <h1>GALLARY</h1>
        <p>다양한 화보와 일상 앨범 화보들을 <br></br> IYOU GALLARY에서 확인해보세요.</p>
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
