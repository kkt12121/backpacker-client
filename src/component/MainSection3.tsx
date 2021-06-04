import React, { ReactElement } from "react";
import "../css/MainSection3.scss";
import selectRegion from "./video/contentList.gif";
interface Props {}

export default function MainSection3({}: Props): ReactElement {
  return (
    <section className="mainSection3">
      <img className="mainSection3Image" src={selectRegion} />
      <h2 className="mainSection3Text">
        떠나고 싶은 여행지를 선택해보세요 !
        <p>
          내가 가고싶은 대한민국의 도시를 선택하고
          <br />
          지역의 맛집, 명소를 방문해보세요
        </p>
      </h2>
    </section>
  );
}
