import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentWriteArea.scss";
import ContentItemList from "./ContentItemList";
import ContentSearch from "./ContentSearch";
import ContentUpdateAreaHeader from "./ContentUpdateAreaHeader";
import ContentUpdateCalendar from "./ContentUpdateCalendar";
import MapModal from "./MapModal";
import { createGlobalStyle } from "styled-components";
import { DropResult } from "react-beautiful-dnd";
import { reorder } from "./reorder";
import { getPlanList } from "action/ContentWriteAction";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router";
import ContentMap from "./ContentMap";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
interface Props {
  id: string;
}

export default function ContentUpdateArea({ id }: Props): ReactElement {
  let token = localStorage.getItem("token");
  const toast = useToast();
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
  const [planList, setplanList] = useState<
    Array<Array<{ price?: number; img?: string }>>
  >([[{}]]);
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );
  const schedule = useSelector((state: RootState) => state.planListReducer);
  const [test, settest] = useState("");
  const [openTotalMap, setOpenTotalMap] = useState<boolean>(false);

  const dispatch = useDispatch();

  //컨텐츠 데이터 받기 (API 요청)
  useEffect(() => {
    // console.log("패치데이터 시작");
    const fetchData = async () => {
      // console.log(`패치데이터 id값+${id}`);
      await axios.get(`https://localhost:4000/content/${id}`).then((res) => {
        // console.log(res.data);
        setContentData(res.data.contentInfo);
        // console.log(contentData);
        setContentUserData(res.data.userInfo);
        setplanList(res.data.itemArr);
      });
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
        // console.log("리절트테스트", result);
        if (result) {
          let sum = 0;
          for (let i = 0; i < result.length; i++) {
            if (result[i] === undefined) {
              continue;
            } else sum = sum + result[i];
          }
          // console.log("결과값", sum);
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
  const openTotalMapHandler = () => {
    if (openTotalMap) {
      setOpenTotalMap(false);
    } else {
      setOpenTotalMap(true);
    }
  };
  return (
    <>
      {mapItemClickState ? <Bodytag /> : null}
      {mapItemClickState ? <div className="modal"></div> : null}
      {contentData ? <ContentUpdateCalendar props={contentData} /> : null}
      {console.log(contentUserData)}
      <ContentUpdateAreaHeader props={contentUserData} content={contentData} />
      <div className="bigWriteArea">
        <section className="contentWriteAreaBox">
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
        <button className="openMapSectionBtn" onClick={openTotalMapHandler}>
          {openTotalMap ? (
            <ArrowRightIcon color="white" />
          ) : (
            <ArrowLeftIcon color="white" className="arrowLIcon" />
          )}
        </button>
        {openTotalMap ? (
          <section className="mapSection">
            <ContentMap planList={planList} />
          </section>
        ) : null}
      </div>
      {console.log(state, "스테이트 확인용")}
      {console.log(
        "이미지 필터 테스트용",
        planList.map((el, idx) => {
          return el.map((ele) => {
            return ele;
          });
        })
      )}
      {console.log(planList, "라이트에어리아")}
    </>
  );
}
