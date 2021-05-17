import React, { ReactElement } from "react";
import "../css/MainSection4.scss";
interface Props {}

export default function MainSection4({}: Props): ReactElement {
  return (
    <section className="mainSection4">
      <img
        className="mainSection4Image"
        src="https://mblogthumb-phinf.pstatic.net/20160229_206/picpic211_1456734021089dUW36_GIF/%25EB%25B2%25A0%25EC%259D%25B4%25EA%25B0%2580%25EA%25B0%2580_%25EC%259E%2598%25ED%2595%2598%25EB%258A%2594%25EA%25B1%25B0%25EC%2595%25BC.gif?type=w800"
      />
      <h2 className="mainSection4Text">
        여행지의 평균 경비를 참고해보세요 !
        <p> 제라스와 쓰레쉬의 마나 소모는 </p>
        <p> 총 200 입니다.</p>
      </h2>
    </section>
  );
}
