import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
//pages
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Page9 from "./Pages/Page9";
import Newyear from "./Pages/Newyear";

import Slider from "react-slick";

function App() {
  const settings = {
    dots: true,
    arrows:0,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <div className="App">
      <Header />
      <Newyear />
      <Section1 />
      <div className="block lg:hidden bg-center bg-cover bg-no-repeat bg-new-bg  bg-fixed">
        <Slider {...settings} className="pb:25">
          <div><Page1/></div>
          <div><Page2/></div>
          <div><Page3/></div>
          <div><Page4/></div>
          <div><Page5/></div>
          <div><Page6/></div>
          <div><Page7/></div>
          <div><Page8/></div>
          <div><Page9/></div>
        </Slider>
      </div>

      <div className="hidden  lg:block bg-center bg-cover bg-no-repeat bg-new-bg  bg-fixed">
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
        <Page6/>
        <Page7/>
        <Page8/>
        <Page9/>
      </div>

      <Section2 />

    </div>
  );
}

export default App;
