import Carousel from "component/Carousel";
import Footer from "component/Footer";
import MainSection1 from "component/MainSection1";
import MainSection2 from "component/MainSection2";
import MainSection3 from "component/MainSection3";
import MainSection4 from "component/MainSection4";
import MainSection5 from "component/MainSection5";
import MainSection6 from "component/MainSection6";
import MainSection7 from "component/MainSection7";
import MainSection8 from "component/MainSection8";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import { createGlobalStyle } from "styled-components";

interface Props {}

const Bodytag = createGlobalStyle`
body {
  overflow : hidden;
  height : 100%;
}
body*{
  touch-action : none;
}
`;

export default function MainPage({}: Props): ReactElement {
  const isClickReducer = useSelector(
    (state: RootState) => state.ModalClickReducer
  );
  return (
    <>
      {isClickReducer ? <Bodytag /> : null}
      <MainSection1 />
      <MainSection2 />
      <Carousel />
      <MainSection6></MainSection6>
      <MainSection7></MainSection7>
      <MainSection8 />
      <Footer />
    </>
  );
}
