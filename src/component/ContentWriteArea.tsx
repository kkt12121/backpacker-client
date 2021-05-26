import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { DropResult } from "react-beautiful-dnd";
import { reorder } from "./reorder";
import { getPlanList } from "action/ContentWriteAction";
interface Props {}

export default function ContentWriteArea({}: Props): ReactElement {
  const state = useSelector((state: RootState) => state.priceReducer);
  const dayList = useSelector((state: RootState) => state.dayListReducer);
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);
  const [planList, setplanList] = useState<Array<Array<{ price?: number }>>>([
    [{}],
  ]);
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );

  const dispatch = useDispatch();

  // const handleCost = () => {
  //   let result = planList.map((el) => {
  //     if (el !== undefined) {
  //       return el.reduce((acc, cur): any => {
  //         return cur.price !== undefined ? acc + cur.price : 0;
  //       }, 0);
  //     } else {
  //       console.log(null);
  //     }
  //   });
  //   if (result) {
  //     console.log("있으면 얼마", result);
  //     return result.reduce((acc, cur): number => {
  //       return acc !== undefined && cur !== undefined ? acc + cur : 0;
  //     }, 0);
  //   } else {
  //     console.log("없으면?", result);
  //   }
  // };
  const handleCost = () => {
    let priceArray = planList.map((el) => {
      return el === undefined
        ? console.log("넘어가")
        : el.filter((ele) => {
            return ele.price;
          });
    });
    if (priceArray) {
      let result = priceArray.map((el) => {
        return el === undefined
          ? console.log("리듀스 넘어가")
          : el.reduce((acc, cur): any => {
              return cur.price !== undefined ? acc + cur.price : 0;
            }, 0);
      }) as number[];
      console.log("리절트테스트", result);
      if (result) {
        let sum = 0;
        for (let i = 0; i < result.length; i++) {
          if (result[i] === undefined) {
            continue;
          } else sum = sum + result[i];
        }
        console.log("결과값", sum);
        return sum;
      }
    }
  };
  useEffect(() => {
    dispatch(getPlanList(planList));
  }, [planList]);
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

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    const newItems = reorder(
      planList,
      source.index,
      destination.index,
      currentDay
    );

    setplanList(newItems);
  };
  return (
    <>
      {mapItemClickState ? <Bodytag /> : null}
      {mapItemClickState ? <div className="modal"></div> : null}
      <ContentWriteCalendar />

      <section className="contentWriteAreaBox">
        <ContentWriteAreaHeader />

        {dayList !== null
          ? Object.entries(dayList).map((el) => {
              return currentDay === Number(el[0]) ? (
                <>
                  <h1>데이{currentDay + 1}</h1>
                  <div>
                    <ContentItemList
                      planList={planList}
                      onDragEnd={onDragEnd}
                      setplanList={setplanList}
                    />
                  </div>
                </>
              ) : null;
            })
          : null}
        <div className="totalPriceBox">
          <div className="totalPrice">
            총 예상 경비 금액 : {handleCost()} 원
          </div>
        </div>
        <ContentSearch planList={planList} setplanList={setplanList} />
        <button className="writeCompletedButton">작성완료</button>
      </section>
      {mapClickState ? <MapModal planList={planList} /> : null}
    </>
  );
}
