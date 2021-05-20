import React, { ReactElement } from "react";
import "../css/ContentWriteArea.scss";
import ContentItem from "./ContentItem";
import ContentItemList from "./ContentItemList";
import ContentSearch from "./ContentSearch";
import ContentWriteAreaHeader from "./ContentWriteAreaHeader";
import ContentWriteCalendar from "./ContentWriteCalendar";
interface Props {}

export default function ContentWriteArea({}: Props): ReactElement {
  return (
    <>
      <ContentWriteCalendar />
      <section className="contentWriteAreaBox">
        <ContentWriteAreaHeader />
        <h1>데이1</h1>
        <ContentItemList />
        <div className="totalPriceBox">
          <div className="totalPrice">총 예상 경비 금액 : 30조원</div>
        </div>
        <ContentSearch />
        <button className="writeCompletedButton">작성완료</button>
      </section>
    </>
  );
}
