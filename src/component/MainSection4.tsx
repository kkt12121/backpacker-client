import React, { ReactElement } from "react";
import "../css/MainSection4.scss";
import budgetGif from "./video/contentCreate3.gif";
interface Props {}

export default function MainSection4({}: Props): ReactElement {
  return (
    <section className="mainSection4">
      <img className="mainSection4Image" src={budgetGif} />
      <h2 className="mainSection4Text">
        여행지의 평균 경비를 참고해보세요 !
        <p>
          {" "}
          먼저 다녀온 Backpacker들의 예산을 참고할 수 있습니다 <br /> 여러분도
          다른Backpacker의 길잡이가 되어주세요
        </p>
      </h2>
    </section>
  );
}
