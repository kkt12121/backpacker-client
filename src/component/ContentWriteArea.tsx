import axios from "axios";
import React, { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentWriteArea.scss";
import ContentItem from "./ContentItem";
import ContentItemList from "./ContentItemList";
import ContentSearch from "./ContentSearch";
import ContentWriteAreaHeader from "./ContentWriteAreaHeader";
import ContentWriteCalendar from "./ContentWriteCalendar";
import MapItemModal from "./MapItemModal";
import MapModal from "./MapModal";
import { createGlobalStyle } from "styled-components";

interface Props {}

export default function ContentWriteArea({}: Props): ReactElement {
  const state = useSelector((state: RootState) => state.priceReducer);
  const dayList = useSelector((state: RootState) => state.dayListReducer);
  const [currentDay, setcurrentDay] = useState<number>(0);
  const [planList, setplanList] = useState<Array<Array<Object>>>([[{}]]);
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );
  // 날짜 차이 길이의 arr 생성,
  // 그 arr.map
  // arr = [0, 0, 0, 0, 0].map((el) => {
  //    {currentDay === arr.indexOf(el) ? (
  //    <ContentItemList currentDay={currentDay} planList={planList} />
  //    ) : null}
  // })

  // res.data.item[0] 데이터 모음
  // res.data.item[0].addr1 주소
  // res.data.item[0].firstimage 사진 주소
  // res.data.item[0].mapx mapy 위도 경도
  // res.data.item[0].title 장소이름
  // res.data.item[0].tel 전화번호
  const Bodytag = createGlobalStyle`
body {
  overflow : hidden;
  height : 100%;
}
body*{
  touch-action : none;
}
`;
  return (
    <>
      {mapItemClickState ? <Bodytag /> : null}
      {mapItemClickState ? <div className="modal"></div> : null}
      <ContentWriteCalendar setcurrentDay={setcurrentDay} />

      <section className="contentWriteAreaBox">
        <ContentWriteAreaHeader setcurrentDay={setcurrentDay} />

        {dayList !== null
          ? Object.entries(dayList).map((el) => {
              return currentDay === Number(el[0]) ? (
                <>
                  <h1>데이{currentDay + 1}</h1>
                  <ContentItemList
                    currentDay={currentDay}
                    planList={planList}
                  />
                </>
              ) : null;
            })
          : null}
        <div className="totalPriceBox">
          <div className="totalPrice">
            총 예상 경비 금액 :{" "}
            {state.data.reduce((acc, cur): number => {
              return Number(acc) + Number(cur);
            })}
          </div>
        </div>
        <ContentSearch
          planList={planList}
          setplanList={setplanList}
          currentDay={currentDay}
        />
        <button className="writeCompletedButton">작성완료</button>
      </section>
      {mapClickState ? <MapModal planList={planList} /> : null}
    </>
  );
}
