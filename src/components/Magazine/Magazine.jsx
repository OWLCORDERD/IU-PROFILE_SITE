import React, {useState} from 'react'
import './magazine.css'

const Magazine = (props) => {

  const [filter, onFilter] = useState("#vogue");

  return (
    <div className = "magazine-container">

        <div className = "magazine-title">
          <h1>2022 NEW IU MAGAZINE</h1>
        </div>

        <div className = "magazine-box">

        <div className = "magazine-filter">
          <a href = "#VOGUE" onClick={()=>onFilter("#vogue")} className = {filter === "#vogue" ? "active" : ''}>VOGUE</a>
          <a href = "#MARIE CLAIRE" onClick={()=>onFilter("#MARIE CLAIRE")} className = {filter === "#MARIE CLAIRE" ? "active" : ''}>MARIE CLAIRE</a>
        </div>

        <div id = "magazine-imageBox" className={filter === "#vogue" ? "active" : ''}>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[0].img_url} alt = ""/>
          <div className = "magazine-detail">
            <img src = {props.magazinePicture[0].title} alt = ""/>
            <p>{props.magazinePicture[0].sub_title}</p>
          </div>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[1].img_url} alt = ""/>
          <div className = "magazine-detail">
            <img src = {props.magazinePicture[1].title} alt = ""/>
            <p>{props.magazinePicture[1].sub_title}</p>
          </div>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[2].img_url} alt = ""/>
          <div className = "magazine-detail">
            <img src = {props.magazinePicture[2].title} alt = ""/>
            <p>{props.magazinePicture[2].sub_title}</p>
          </div>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[3].img_url} alt = ""/>
          <div className = "magazine-detail">
            <img src = {props.magazinePicture[3].title} alt = ""/>
            <p>{props.magazinePicture[3].sub_title}</p>
          </div>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[4].img_url} alt = ""/>
          <div className = "magazine-detail">
            <img src = {props.magazinePicture[4].title} alt = ""/>
            <p>{props.magazinePicture[4].sub_title}</p>
          </div>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[5].img_url} alt = ""/>
          <div className = "magazine-detail">
            <img src = {props.magazinePicture[5].title} alt = ""/>
            <p>{props.magazinePicture[5].sub_title}</p>
          </div>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[6].img_url} alt = ""/>
          <div className = "magazine-detail">
            <img src = {props.magazinePicture[6].title} alt = ""/>
            <p>{props.magazinePicture[6].sub_title}</p>
          </div>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[7].img_url} alt = ""/>
          <div className = "magazine-detail">
            <img src = {props.magazinePicture[7].title} alt = ""/>
            <p>{props.magazinePicture[7].sub_title}</p>
          </div>
          </div>

          </div>

          
        <div id = "magazine-imageBox" className={filter === "#MARIE CLAIRE" ? "active" : ''}>
          
          <div className = "magazine-item">
          <img src = {props.magazinePicture[8].img_url} alt = ""/>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[9].img_url} alt = ""/>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[10].img_url} alt = ""/>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[11].img_url} alt = ""/>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[12].img_url} alt = ""/>
          </div>

          <div className = "magazine-item">
          <img src = {props.magazinePicture[13].img_url} alt = ""/>
          </div>

          </div>

          </div>

    </div>
  )
}

export default Magazine