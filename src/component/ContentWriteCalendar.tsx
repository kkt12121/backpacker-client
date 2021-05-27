import React, { ReactElement, useEffect, useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/ContentWriteCalendar.scss";
import ko from "date-fns/locale/ko";
import ContentMap from "./ContentMap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import { mapClose, mapOpen } from "action/ModalClickAction";
import MapModal from "./MapModal";
import { createGlobalStyle } from "styled-components";
import {
  getCurrentDay,
  getDayList,
  getEndDate,
  getStartDate,
  getTitle,
} from "action/ContentWriteAction";
import { currentDay } from "reducer/ContentWriteReducer";

interface Props {}

registerLocale("ko", ko);
export default function ContentWriteCalendar({}: Props): ReactElement {
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const [endDate, setendDate] = useState<Date | null>(new Date());
  const [dayCount, setdayCount] = useState<number | null>(null);
  const [dayList, setdayList] = useState<[string?] | null>(null);
  const dispatch = useDispatch();
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  const [divClick, setdivClick] = useState(false);
  const [divTitle, setdivTitle] = useState("");
  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    setdayCount(
      Math.ceil(
        (Number(endDate?.getTime()) - Number(startDate?.getTime())) / 86400000
      ) + 1
    );
    console.log("됐냐?");
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
        <ReactDatePicker
          locale="ko"
          dateFormat="yyyy/MM/dd/eee요일"
          selected={startDate}
          onChange={(date: Date | null) => date && setstartDate(date)}
        />
        <ReactDatePicker
          locale="ko"
          dateFormat="yyyy/MM/dd/eee요일"
          minDate={startDate}
          selected={endDate}
          onChange={(date: Date | null) => date && setendDate(date)}
        />
        <div
          className={divClick ? "tripTitleOff" : "tripTitle"}
          onClick={handleDivClick}
        >
          {divTitle.length === 0 ? "제목을 입력해주세요" : divTitle}
        </div>
        {divClick ? (
          <>
            <input onChange={(e) => handleDivTitle(e)} />
            <button
              onClick={() => {
                setdivClick(false);
              }}
            >
              확인
            </button>
          </>
        ) : null}
        <button
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
              데이{idx + 1}
            </button>
          );
        })}
      </div>
      {console.log("시작날", startDate)}
      {console.log("끝나는날", endDate)}
      {console.log(
        "차이",
        Math.ceil(
          (Number(endDate?.getTime()) - Number(startDate?.getTime())) / 86400000
        ) + 1
      )}
      {/* {mapClickState ? <MapModal /> : null} */}
    </>
  );
}
