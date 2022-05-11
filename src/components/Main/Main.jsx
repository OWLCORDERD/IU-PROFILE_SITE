import React, { useEffect, useState } from "react";
import "../Main/main.css";
import About from "../About/About"
import Gallary from "../Gallary/Gallary"
import Banner from "../Banner/Banner"
import Magazine from "../Magazine/Magazine";
import Loading from "../Loading/Loading";

const Main = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);

    setTimeout(() => {
      setLoading(loading);
    }, 3000);

  },[])

  return (
    <>

    {loading ? 
    (
      <Loading loading = {loading}/>
    )

    :

(

        <div className = "container">

        <header>
        <Banner/>
        </header>

        <section id = "SEC1">
          <About/>
          </section>

          <section id = "SEC2">
          <Gallary/>
          </section>

          <section id = "SEC3">
          <Magazine/>
          </section>
          </div>
)
}
        </>
  );
};

export default Main;