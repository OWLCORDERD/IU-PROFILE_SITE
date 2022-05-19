import React, { Component } from "react";
import "./youtube.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from "../ImageData.json";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
    };

    return (

      <div className = "Youtube-container">

      <div className = "Youtube-title">
      <h1>YOUTUBE</h1>
    </div>

    <ul className = "Youtube-category">
      <li><a href = "#" className = "active">IU TV</a></li>
      <li><a href = "#">IU CLIP</a></li>
      <li><a href = "#">아이유의 팔레트</a></li>
      <li><a href = "#">꿈빛 셰프유</a></li>
      <li><a href = "#">BEHIND</a></li>
    </ul>
    

      <div className = "slide-container">

        <Slider {...settings}>
          {data.VogueData.map((item, index) => {
            return (
          <div className = "slide-box" key = {index}>
           <img src = {item.img_url} alt = ""/>
          </div>
        )
          })}
        </Slider>
      </div>
      </div>
    );
  }
}