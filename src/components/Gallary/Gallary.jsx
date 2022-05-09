import React from 'react'
import './gallary.css'
import GallaryPicture1 from "../../assets/image/J.ASTINA/2022 JASTINA_1.jpg"
import GallaryPicture2 from "../../assets/image/J.ASTINA/2022 JASTINA_2.jpg"
import GallaryPicture3 from "../../assets/image/J.ASTINA/2022 JASTINA_3.jpg"
import GallaryPicture4 from "../../assets/image/J.ASTINA/2022 JASTINA_4.jpg"
import GallaryPicture5 from "../../assets/image/J.ASTINA/2022 JASTINA_5.jpg"
import GallaryPicture6 from "../../assets/image/J.ASTINA/2022 JASTINA_6.jpg"
import GallaryPicture7 from "../../assets/image/J.ASTINA/2022 JASTINA_7.jpg"
import GallaryPicture8 from "../../assets/image/J.ASTINA/2022 JASTINA_8.jpg"

const Gallary = () => {
  return (
    <div className = "Gallary-container">

      <div className = "Gallary-title">
        <h1>2022 NEW IU COLLECTION</h1>
      </div>

    <div className = "Gallary-box">
      <div className = "Gallary-item">

        <div className = "Gallary-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dGqj-lcTMlY"
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>

      </div>

      <div className = "Gallary-item">
        <div className = "Gallary-list-title">
          <h1>GALLARY</h1>
        </div>
        <div className = "Gallary-list">
          <div className = "Gallary-sub-img">
            <img src = {GallaryPicture1} alt = ""/>
          </div>

          <div className = "Gallary-sub-img">
            <img src = {GallaryPicture2} alt = ""/>
          </div>

          <div className = "Gallary-sub-img">
            <img src = {GallaryPicture3} alt = ""/>
          </div>

          <div className = "Gallary-sub-img">
            <img src = {GallaryPicture4} alt = ""/>
          </div>

          <div className = "Gallary-sub-img">
            <img src = {GallaryPicture5} alt = ""/>
          </div>

          <div className = "Gallary-sub-img">
            <img src = {GallaryPicture6} alt = ""/>
          </div>

          <div className = "Gallary-sub-img">
            <img src = {GallaryPicture7} alt = ""/>
          </div>
          
          <div className = "Gallary-sub-img">
            <img src = {GallaryPicture8} alt = ""/>
          </div>

          </div>
      </div>

    </div>


  </div>
  )
}

export default Gallary