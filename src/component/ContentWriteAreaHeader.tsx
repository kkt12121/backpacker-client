import { getRegion } from "action/ContentWriteAction";
import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../css/ContentWriteAreaHeader.scss";
interface Props {}

export default function ContentWriteAreaHeader({}: Props): ReactElement {
  const [divMouseOver, setdivMouseOver] = useState(false);
  const [region, setregion] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegion(region));
  }, [region]);
  return (
    <>
      <div className="contentWriteAreaHeader">
        <div className="writerListBox">
          현재 작성자
          <div className="writerList">
            <span>징징이</span>
            <span>뚱이</span>
          </div>
        </div>
      </div>
      <span
        className="regionChoice"
        onMouseOut={() => {
          setdivMouseOver(false);
        }}
        onMouseOver={() => {
          setdivMouseOver(true);
        }}
      >
        {region.length === 0 ? "지역을 선택해주세요" : region}
        <ul className={divMouseOver ? "regionList" : "regionListOff"}>
          <li
            onClick={() => {
              setregion("서울");
            }}
          >
            서울
          </li>
          <li
            onClick={() => {
              setregion("경기도");
            }}
          >
            경기도
          </li>
          <li
            onClick={() => {
              setregion("인천");
            }}
          >
            인천
          </li>
          <li
            onClick={() => {
              setregion("강원도");
            }}
          >
            강원도
          </li>
          <li
            onClick={() => {
              setregion("충청북도");
            }}
          >
            충청북도
          </li>
          <li
            onClick={() => {
              setregion("충청남도");
            }}
          >
            충청남도
          </li>
          <li
            onClick={() => {
              setregion("대전");
            }}
          >
            대전
          </li>
          <li
            onClick={() => {
              setregion("전라북도");
            }}
          >
            전라북도
          </li>
          <li
            onClick={() => {
              setregion("전라남도");
            }}
          >
            전라남도
          </li>
          <li
            onClick={() => {
              setregion("광주");
            }}
          >
            광주
          </li>
          <li
            onClick={() => {
              setregion("경상북도");
            }}
          >
            경상북도
          </li>
          <li
            onClick={() => {
              setregion("경상남도");
            }}
          >
            경상남도
          </li>
          <li
            onClick={() => {
              setregion("대구");
            }}
          >
            대구
          </li>
          <li
            onClick={() => {
              setregion("울산");
            }}
          >
            울산
          </li>
          <li
            onClick={() => {
              setregion("부산");
            }}
          >
            부산
          </li>
          <li
            onClick={() => {
              setregion("제주");
            }}
          >
            제주
          </li>
        </ul>
      </span>
    </>
  );
}
