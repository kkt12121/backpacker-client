import React, { ReactElement, useState } from "react";
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

interface Props {}

registerLocale("ko", ko);
export default function ContentWriteCalendar({}: Props): ReactElement {
  const [startDate, setstartDate] = useState<Date | null>(new Date());
  const [endDate, setendDate] = useState<Date | null>(new Date());
  const dispatch = useDispatch();
  const mapClickState = useSelector((state: RootState) => state.MapClick);
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
      {mapClickState ? <Bodytag /> : null}

      {mapClickState ? <div className="modal"></div> : null}
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
        <div>무슨무슨 여행</div>
        <button
          onClick={() => {
            mapClickState ? dispatch(mapClose()) : dispatch(mapOpen());
          }}
        >
          지도
        </button>
      </div>
      <MapModal />
    </>
  );
}
