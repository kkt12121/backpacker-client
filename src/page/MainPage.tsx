import Carousel from "component/Carousel";
import MainSection1 from "component/MainSection1";
import MainSection2 from "component/MainSection2";

import MainSection6 from "component/MainSection6";
import MainSection7 from "component/MainSection7";
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
    </>
  );
}
