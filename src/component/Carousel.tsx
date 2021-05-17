import React, { ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSection3 from "./MainSection3";
import MainSection4 from "./MainSection4";
import MainSection5 from "./MainSection5";

interface Props {}

export default function Carousel({}: Props): ReactElement {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
