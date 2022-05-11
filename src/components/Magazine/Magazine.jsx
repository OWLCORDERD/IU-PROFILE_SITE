import React, {useState} from 'react'
import './magazine.css'
import Data from "../ImageData.json"

const Magazine = () => {

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

          {Data.VogueData.map((item) => {
            return(
          <div className = "magazine-item">
          <img src = {item.img_url} alt = ""/>
          <div className = "magazine-detail">
            <img src = {item.title} alt = ""/>
            <p>{item.sub_title}</p>
          </div>
          </div>
            )
          })}

          </div>

          
        <div id = "magazine-imageBox" className={filter === "#MARIE CLAIRE" ? "active" : ''}>

          {Data.MarieDATA.map((item) => {
            return(
              <div className = "magazine-item">
              <img src = {item.img_url} alt = ""/>
              </div>
            )
          })}

          </div>

          </div>

    </div>
  )
}

export default Magazine