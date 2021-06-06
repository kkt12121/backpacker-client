import React, { ReactElement, useEffect, useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/ContentWriteCalendar.scss";
import ko from "date-fns/locale/ko";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import { mapClose, mapOpen } from "action/ModalClickAction";
import { createGlobalStyle } from "styled-components";
import {
  getCurrentDay,
  getDayList,
  getEndDate,
  getStartDate,
  getTitle,
} from "action/ContentWriteAction";
import { Button, Center, Input } from "@chakra-ui/react";
interface Props {
  props: {
    endDate: string;
    startDate: string;
    title: string;
    totalCost: number;
    touristRegion: string;
  };
}

registerLocale("ko", ko);
export default function ContentUpdateCalendar({ props }: Props): ReactElement {
  const [startDate, setstartDate] = useState<Date | null>(null);
  const [endDate, setendDate] = useState<Date | null>(null);
  const [dayCount, setdayCount] = useState<number | null>(null);
  const [dayList, setdayList] = useState<[string?] | null>(null);
  const dispatch = useDispatch();
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  const [divClick, setdivClick] = useState(false);
  const [divTitle, setdivTitle] = useState(props?.title);

  useEffect(() => {
    if (props?.startDate) {
      // console.log("props가 있다.");
      setstartDate(new Date(props?.startDate));
      setendDate(new Date(props?.endDate));
    } else {
      // console.log("props가 없다.");
      // console.log("props 값" + props);
    }
  }, []);
  useEffect(() => {
    // console.log("startDate" + newStartDate + "///// endDate" + dateEnd);
    setdayCount(
      Math.ceil(
        (Number(endDate?.getTime()) - Number(startDate?.getTime())) / 86400000
      ) + 1
    );
    // console.log("됐냐?");
  }, [startDate, endDate]);

  useEffect(() => {
    const makeBtn = async () => {
      if (dayCount) {
        let copyDayList: [string?] = [];
        for (let i = 1; i <= dayCount; i++) {
          copyDayList.push("테스트");
        }
        await setdayList(copyDayList);
      }
    };
    makeBtn();
  }, [dayCount]);

  useEffect(() => {
    dispatch(getDayList(dayList));
  }, [dayList]);

  useEffect(() => {
    dispatch(getTitle(divTitle));
  }, [divTitle]);

  useEffect(() => {
    dispatch(getStartDate(String(startDate)));
  }, [startDate]);

  useEffect(() => {
    dispatch(getEndDate(String(endDate)));
  }, [endDate]);

  const Bodytag = createGlobalStyle`
body {
  overflow : hidden;
  height : 100%;
}
body*{
  touch-action : none;
}
`;

  const handleDivClick = () => {
    if (divClick) {
      setdivClick(false);
    } else {
      setdivClick(true);
    }
  };

  const handleDivTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdivTitle(e.target.value);
  };

  return (
    <>
      {mapClickState ? <Bodytag /> : null}
      {mapClickState ? <div className="modal"></div> : null}{" "}
      <div className="CalendarBox">
        {/* <h1
          className={divClick ? "tripTitleOff" : "tripTitle"}
          onClick={handleDivClick}
        >
          {divTitle.length === 0 ? "여행제목 (Click하여 수정)" : divTitle}
        </h1> */}

        {divClick ? null : (
          <Center
            className="tripUpdateTitle"
            onClick={handleDivClick}
            h="100px"
            color="white"
            fontSize="30"
          >
            {divTitle.length === 0 ? props?.title : divTitle}
          </Center>
        )}
        {divClick ? (
          <div className="titleInputBox">
            <Input
              className="titleInput"
              variant="filled"
              size="lg"
              width="50%"
              value={divTitle.length === 0 || "" ? props?.title : divTitle}
              onChange={(e) => handleDivTitle(e)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setdivClick(false);
                }
              }}
            />
            <Button
              bgColor="#ff1493"
              color="white"
              variant="solid"
              size="lg"
              onClick={() => {
                setdivClick(false);
              }}
            >
              확인
            </Button>
          </div>
        ) : null}
        <div className="dateBox">
          <div className="startDate">
            출발일
            <ReactDatePicker
              locale="ko"
              dateFormat="yyyy/MM/dd/eee요일"
              selected={startDate}
              popperModifiers={{
                preventOverflow: {
                  enabled: true,
                },
              }}
              onChange={(date: Date | null) => date && setstartDate(date)}
              withPortal
            />
          </div>
          <div className="endDate">
            종료일
            <ReactDatePicker
              locale="ko"
              dateFormat="yyyy/MM/dd/eee요일"
              minDate={startDate}
              selected={endDate}
              popperModifiers={{
                preventOverflow: {
                  enabled: true,
                },
              }}
              onChange={(date: Date | null) => date && setendDate(date)}
              withPortal
            />
          </div>
        </div>
        <button
          className="totalMapBtn"
          onClick={() => {
            mapClickState ? dispatch(mapClose()) : dispatch(mapOpen());
          }}
        >
          지도
        </button>
      </div>
      <div className="dayBox">
        {dayList?.map((el, idx) => {
          return (
            <button
              onClick={() => {
                // setcurrentDay(idx);
                dispatch(getCurrentDay(idx));
              }}
            >
              Day {idx + 1}
            </button>
          );
        })}
      </div>
    </>
  );
}
{
  /* {console.log("시작날", dateStart)}
      {console.log("끝나는날", props?.endDate)}
      {console.log(
        "차이",
        Math.ceil(
          (Number(dateEnd?.getTime()) - Number(dateStart?.getTime())) / 86400000
        ) + 1
      )}
      {mapClickState ? <MapModal /> : null} */
}
