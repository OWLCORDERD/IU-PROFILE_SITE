import React, { useEffect } from "react";
import "../navbar/navbar.css";
import logo from "../../assets/image/logo/I-YOU-unscreen.gif";
import { useState } from "react";
import { Link } from "react-router-dom";
import Player from "../Play/Player";
import sectionImg from "../../assets/image/section 배경/GANADARA MV.jpeg";
import { MdLibraryMusic } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [songs] = useState([
    {
      title: "GANADARA",
      artist: "Jay Park, IU",
      img_src: "./Album/GANADARA.png",
      src: "./Audio/GANADARA.mp3"
    },
    {
      title: "조각집",
      artist: "IU",
      img_src: "./Album/조각집.jpg",
      src: "./Audio/조각집 메들리.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  window.addEventListener('scroll', function(){
    var Navbar = document.querySelector('.navbar')

    Navbar.classList.toggle("active", this.window.scrollY > 0)
  })

  const dynamicLogo = {
    initial : {
      opacity : 0,
      y : 200
    },
    animated : {
      opacity  : 1,
      y : 0,
      transition : {
        duration : 1
      }
    }
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <motion.div variants={dynamicLogo} initial="initial" animate="animated" className = "logo-contents">
          <h1>IYOU</h1>
          <p>THE PROFILE SITE</p>
          </motion.div>


        <div className="player-button" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <AiFillCloseCircle className="close" />
          ) : (
            <MdLibraryMusic className="open" />
          )}
        </div>

        <div id = "music-section" className={showMenu ? "active" : ""}>
          <img src={sectionImg} className="section-bg" alt="" />
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
