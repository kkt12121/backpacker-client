import React, { ReactElement, useEffect } from "react";

interface Props {
  index: { title?: string; thumbnail?: string; mapx?: string; mapy?: string };
}
declare global {
  interface Window {
    kakao: any;
  }
}
export default function ContentMapItem({ index }: Props): ReactElement {
  console.log("mapx는 " + index.mapx);
  console.log("mapy는 " + index.mapy);
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      //center: new window.kakao.maps.LatLng(37.579938, 126.977081),
      center: new window.kakao.maps.LatLng(index.mapy, index.mapx),
      level: 3,
    };
    let map = new window.kakao.maps.Map(container, options);
    //마커가 표시 될 위치
    let markerPosition = new window.kakao.maps.LatLng(index.mapy, index.mapx);
    // 마커를 생성
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    // 마커를 지도 위에 표시
    marker.setMap(map);
  });
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
