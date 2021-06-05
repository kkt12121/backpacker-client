import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentWriteArea.scss";
import ContentItemList from "./ContentItemList";
import ContentSearch from "./ContentSearch";
import ContentUpdateAreaHeader from "./ContentUpdateAreaHeader";
import MapModal from "./MapModal";
import { createGlobalStyle } from "styled-components";
import { DropResult } from "react-beautiful-dnd";
import { reorder } from "./reorder";
import { getPlanList } from "action/ContentWriteAction";
import axios from "axios";
import { useHistory } from "react-router";
import ContentUpdateCalendar from "./ContentUpdateCalendar";
interface Props {
  id: string;
}

export default function ContentUpdateArea({ id }: Props): ReactElement {
  let token = localStorage.getItem("token");
  const history = useHistory();
  const [totalCost, settotalCost] = useState(0);
  const state = useSelector((state: RootState) => state);
  const dayList = useSelector((state: RootState) => state.dayListReducer);
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);
  const startDate = useSelector((state: RootState) => state.startDateReducer);
  const endDate = useSelector((state: RootState) => state.endDateReducer);
  const title = useSelector((state: RootState) => state.titleReducer);
  const region = useSelector((state: RootState) => state.regionReducer);
  const [contentData, setContentData] = useState<any>(null);
  const [contentUserData, setContentUserData] = useState<any>(null);
  const [planList, setplanList] = useState<Array<Array<{ price?: number }>>>([
    [{}],
  ]);
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );
  //params가 안된다.
  // let params = useParams();
  // const getId = () => {
  //   for (const [key, value] of Object.entries(params)) {
  //     console.log(`${key}: ${value}`);
  //   }
  // };
  // getId();
  // const { id } = useParams<{ id?: string }>();

  // const params = new URL(window.location.href).searchParams;
  // console.log("searchParams값" + params);
  // let id = params.get("id");
  const dispatch = useDispatch();

  //컨텐츠 데이터 받기 (API 요청)
  useEffect(() => {
    console.log("패치데이터 시작");
    const fetchData = async () => {
      console.log(`패치데이터 id값+${id}`);
      await axios.get(`https://localhost:4000/content/${id}`).then((res) => {
        console.log(res.data);
        setContentData(res.data.contentInfo);
        console.log(contentData);
        setContentUserData(res.data.userInfo);
        setplanList(res.data.itemArr);
      });
      //   await fetch(`https://localhost:4000/content/${id}`)
      //     .then((res) => res.json())
      //     .then((res) => {
      //       //console.log(res.data);
      //       setContentData(res.data.contentInfo);
      //       setContentUserData(res.data.userInfo);
      //       setplanList(res.data.itemArr);
      //     });
    };
    fetchData();
  });
  useEffect(() => {
    console.log("컨텐츠 데이터 확인 " + contentData);
  }, [contentData]);
  useEffect(() => {
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
          settotalCost(sum);
        }
      }
    };
    handleCost();
  }, [planList]);

  useEffect(() => {
    dispatch(getPlanList(planList));
  }, [planList]);

  const Bodytag = createGlobalStyle`
body {
  overflow : hidden;
  height : 100%;
}
body*{
  touch-action : none;
}
`;
  //수정 버튼 기능
  const handleSendBtn = () => {
    axios
      .put(
        `https://localhost:4000/content/${id}/update`,
        {
          startDate: startDate,
          endDate: endDate,
          totalCost: totalCost,
          schedule: planList,
          title: title,
          touristRegion: region,
          thumbnail: "없음",
          touristSpot: "홍대",
        },
        {
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${token}`,
          },

          withCredentials: true,
        }
      )
      .then((res) => console.log("완료"))
      .catch((err) => console.log(err));
    history.push(`/content/${id}`);
    window.location.reload();
  };

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
      {contentData ? <ContentUpdateCalendar props={contentData} /> : null}

      <section className="contentWriteAreaBox">
        {console.log(contentUserData)}
        <ContentUpdateAreaHeader
          props={contentUserData}
          content={contentData}
        />

        {dayList !== null
          ? Object.entries(dayList).map((el) => {
              return currentDay === Number(el[0]) ? (
                <>
                  <h1>DAY {currentDay + 1}</h1>
                  <div className="tableOfplan">
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
          {console.log("contentData입니다" + contentData)}
          <div className="totalPrice">총 예상 경비 금액 : {totalCost} 원</div>
        </div>
        <ContentSearch planList={planList} setplanList={setplanList} />
        <button className="writeCompletedButton" onClick={handleSendBtn}>
          작성완료
        </button>
      </section>
      {mapClickState ? <MapModal planList={planList} /> : null}
      {console.log(state, "스테이트 확인용")}
    </>
  );
}
