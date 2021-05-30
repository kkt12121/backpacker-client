import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentWriteArea.scss";
import ContentItemList from "./ContentItemList";
import ContentSearch from "./ContentSearch";
import ContentUpdateAreaHeader from "./ContentUpdateAreaHeader";
import ContentWriteCalendar from "./ContentWriteCalendar";
import MapModal from "./MapModal";
import { createGlobalStyle } from "styled-components";
import { DropResult } from "react-beautiful-dnd";
import { reorder } from "./reorder";
import { getPlanList } from "action/ContentWriteAction";
import axios from "axios";
import { useParams } from "react-router";

interface Props {}

export default function ContentUpdateArea({}: Props): ReactElement {
  let token = localStorage.getItem("token");
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
  const schedule = useSelector((state: RootState) => state.planListReducer);
  const [test, settest] = useState("");
  let params = useParams();
  const getId = () => {
    for (const [key, value] of Object.entries(params)) {
      console.log(`${key}: ${value}`);
    }
  };
  getId();
  const { id } = useParams<{ id?: string }>();

  const dispatch = useDispatch();

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
    const fetchData = async () => {
      await axios.get(`https://localhost:4000/content/${id}`).then((res) => {
        console.log(res.data);
        setContentData(res.data.contentInfo);
        setContentUserData(res.data.userInfo);
        setplanList(res.data.itemArr);
      });
    };

    fetchData();
    handleCost();
  }, [planList]);

  useEffect(() => {
    dispatch(getPlanList(planList));
  }, [planList]);

  useEffect(() => {
    settest(JSON.stringify(planList));
    console.log("실행유무");
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

  const handleSendBtn = () => {
    // axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
    // axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post(
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
      <ContentWriteCalendar />

      <section className="contentWriteAreaBox">
        <ContentUpdateAreaHeader props={contentUserData} />

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
          <div className="totalPrice">
            총 예상 경비 금액 : {contentData.totalCost} 원
          </div>
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
