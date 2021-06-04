import React, { ReactElement } from "react";
import Slider from "react-slick";
import "../css/_slick.scss";
import "../css/_slick-theme.scss";
import MainSection3 from "./MainSection3";
import MainSection4 from "./MainSection4";
import MainSection5 from "./MainSection5";

export default function Carousel(): ReactElement {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <MainSection3 />
        </div>
        <div>
          <MainSection4 />
        </div>
        <div>
          <MainSection5 />
        </div>
      </Slider>
    </>
  );
}
