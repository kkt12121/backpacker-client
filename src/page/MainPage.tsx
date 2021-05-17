import Carousel from "component/Carousel";
import MainSection1 from "component/MainSection1";
import MainSection2 from "component/MainSection2";
import MainSection3 from "component/MainSection3";
import MainSection4 from "component/MainSection4";
import MainSection5 from "component/MainSection5";
import MainSection6 from "component/MainSection6";
import MainSection7 from "component/MainSection7";
import React, { ReactElement } from "react";

interface Props {}

export default function MainPage({}: Props): ReactElement {
  return (
    <>
      
       <MainSection1 />
      <MainSection2 />
      <Carousel />
        <MainSection6></MainSection6>
      <MainSection7></MainSection7>
    </>
  );
}
