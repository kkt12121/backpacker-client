import React, { ReactElement } from "react";
import "../css/MainSection3.scss";
interface Props {}

export default function MainSection3({}: Props): ReactElement {
  return (
    <section className="mainSection3">
      <img
        className="mainSection3Image"
        src="https://mblogthumb-phinf.pstatic.net/20160229_192/picpic211_14567337744959oIwF_GIF/picpic_SHm_Pe5NQw8_2.gif?type=w800"
      />
      <h2 className="mainSection3Text">
        떠나고 싶은 여행지를 선택해보세요.
        <p>내가 가고싶은 칼날부리 까지 손쉽게 </p>
        <p>Q클릭 한번으로 편하게 이용해보세요.</p>
      </h2>
    </section>
  );
}
