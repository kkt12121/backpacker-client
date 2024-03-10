import axios from "axios";
import Carousel from "component/Carousel";
import Footer from "component/Footer";
import MainSection1 from "component/MainSection1";
import MainSection2 from "component/MainSection2";
import "dotenv/config";

import MainSection6 from "component/MainSection6";
import MainSection7 from "component/MainSection7";
import MainSection8 from "component/MainSection8";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import { createGlobalStyle } from "styled-components";

const Bodytag = createGlobalStyle`
body {
  overflow : hidden;
  height : 100%;
}
body*{
  touch-action : none;
}
`;
const url = new URL(window.location.href);
const authorizationCode = url.searchParams.get("code");
// console.log(authorizationCode);
if (authorizationCode) {
  axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/user/oauth`,
      { authorizationCode: authorizationCode },
      { headers: { accept: "application/json" }, withCredentials: true }
    )
    .then((res) => {
      // console.log(res.data);
      const token = res.data.accessToken;
      localStorage.setItem("token", token);
    });
}

export default function MainPage(): ReactElement {
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
