import React from 'react'
import "./Loading.css"
import ClipLoader from "react-spinners/ClipLoader"
import { css } from 'styled-components';
import logo from '../../assets/image/logo/I-YOU-unscreen.gif'

const Loading = (props) => {

  const detail = css`
  width : 15rem;
  height : 15rem;
  `;

  return (
    <div className = "Loading-container">
      <div className = "logo">
        <img src = {logo} alt = ""/>
      </div>

      <div className = "loading-state">
           <ClipLoader color = {"#fff"} size = {150} loading = {props.loading} css = {detail} />
           </div>
    </div>
  )
}

export default Loading