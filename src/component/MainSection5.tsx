import React, { ReactElement } from "react";
import "../css/MainSection5.scss";
interface Props {}

export default function MainSection5({}: Props): ReactElement {
  return (
    <section className="mainSection5">
      <img
        className="mainSection5Image"
        src="https://mblogthumb-phinf.pstatic.net/20160229_197/picpic211_1456734021380z2tIk_GIF/%25EC%2593%25B0%25EB%25A0%2588%25EC%2589%25AC_%25EC%2582%25AC%25ED%2598%2595_%25EB%25A0%258C%25ED%2584%25B4.gif?type=w800"
      />
      <h2 className="mainSection5Text">
        일정표에 친구들을 초대해 보세요 !<p> 친구들과 함께 여행 일정을 </p>
        <p> 계획 할 수 있습니다.</p>
      </h2>
    </section>
  );
}
