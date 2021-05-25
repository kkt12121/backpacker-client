import React, { ReactElement, useEffect } from "react";
import { markerdata } from "./MarkerData";
interface Props {
  planList: any[][];
  // index: { title?: string; thumbnail?: string; mapx?: string; mapy?: string };
}
declare global {
  interface Window {
    kakao: any;
  }
}
export default function ContentMap({ planList }: Props): ReactElement {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new window.kakao.maps.LatLng(
        37.624915253753194,
        127.15122688059974
      ),
      level: 10,
    };
    // {address: "서울특별시 중구 세종대로 99", mapx: 126.9748047119,…}
    let map = new window.kakao.maps.Map(container, options);
    planList.map((el) => {
      el.map((e) => {
        console.log("mapx는 " + e.mapx);
        console.log("mapy는 " + e.mapy);
        new window.kakao.maps.Marker({
          //마커가 표시 될 지도
          map: map,
          //마커가 표시 될 위치
          position: new window.kakao.maps.LatLng(e.mapy, e.mapx),
          //마커에 hover시 나타날 title
        });
      });
    });
  }, []);
  return (
    <div
      id="myMap"
      style={{
        width: "500px",
        height: "500px",
        marginLeft: "50px",
        borderRadius: "10px",
      }}
    ></div>
  );
}
