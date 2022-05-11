import React from 'react'
import './test.css'
import dummy from "../ImageData.json"

const text = () => {

  console.log(dummy);
  return (
    <div className = "text-container">

      <div className = "grid-box">

      {dummy.magazineData.map((item) => {
        return(
          <div className = "grid-item" key={item.id}>
          <img src = {item.img_url} alt = ""/>
          </div>
        )
      })}

      </div>
      </div>
  )
}

export default text