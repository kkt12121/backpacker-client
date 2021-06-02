import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentWriteArea.scss";
import ContentItemList from "./ContentItemList";
import ContentSearch from "./ContentSearch";
import ContentWriteAreaHeader from "./ContentWriteAreaHeader";
import ContentWriteCalendar from "./ContentWriteCalendar";
import MapModal from "./MapModal";
import { createGlobalStyle } from "styled-components";
import { DropResult } from "react-beautiful-dnd";
import { reorder } from "./reorder";
import { getPlanList } from "action/ContentWriteAction";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

interface Props {}

export default function ContentWriteArea({}: Props): ReactElement {
  let token = localStorage.getItem("token");
  const toast = useToast();
  const [totalCost, settotalCost] = useState(0);
  const state = useSelector((state: RootState) => state);
  const dayList = useSelector((state: RootState) => state.dayListReducer);
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);
  const startDate = useSelector((state: RootState) => state.startDateReducer);
  const endDate = useSelector((state: RootState) => state.endDateReducer);
  const title = useSelector((state: RootState) => state.titleReducer);
  const region = useSelector((state: RootState) => state.regionReducer);
  const [planList, setplanList] = useState<
    Array<Array<{ price?: number; img?: string }>>
  >([[{}]]);
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );

  const dispatch = useDispatch();
  const history = useHistory();

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

  const handleSendBtn = async () => {
    // axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
    // axios.defaults.headers.post["Content-Type"] = "application/json";
    await axios
      .post(
        "https://localhost:4000/content/create",
        {
          startDate: startDate,
          endDate: endDate,
          totalCost: totalCost,
          schedule: planList,
          title: title,
          touristRegion: region,
          thumbnail: planList.map((el, idx) => {
            return el.map((ele) => {
              return ele.img;
            });
          }),
          touristSpot: "없음",
        },
        {
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${token}`,
          },

          withCredentials: true,
        }
      )
      .then((res) => {
        history.push(`/content/${res.data.id}`);
        window.location.reload();
      })
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
        <ContentWriteAreaHeader />

        {dayList !== null
          ? Object.entries(dayList).map((el) => {
              return currentDay === Number(el[0]) ? (
                <>
                  <h1 className="forWhen">DAY {currentDay + 1}</h1>
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
          <div className="totalPrice">
            총 예상 경비 금액 : {new Intl.NumberFormat().format(totalCost)} 원
          </div>
        </div>
        <ContentSearch planList={planList} setplanList={setplanList} />
        <button
          className="writeCompletedButton"
          onClick={() => {
            if (token) {
              if (title.length === 0) {
                toast({
                  title: "저장 실패",
                  description: "여행 제목을 입력해주세요!",
                  position: "top-right",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              } else if (region.length === 0) {
                toast({
                  title: "저장 실패",
                  description: "여행 지역을 선택해주세요!",
                  position: "top-right",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              } else if (Object.entries(planList[0][0]).length === 0) {
                toast({
                  title: "저장 실패",
                  description: "일정을 한개라도 작성해주세요!",
                  position: "top-right",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              } else {
                handleSendBtn();
              }
            } else {
              toast({
                title: "저장 실패",
                description: "체험하기는 저장하실 수 없습니다.",
                position: "top-right",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
          }}
        >
          작성완료
        </button>
      </section>
      {mapClickState ? <MapModal planList={planList} /> : null}
      {console.log(state, "스테이트 확인용")}
      {console.log(
        "이미지 필터 테스트용",
        planList.map((el, idx) => {
          return el.map((ele) => {
            return ele.img;
          });
        })
      )}
      {console.log(planList, "라이트에어리아")}
    </>
  );
}
