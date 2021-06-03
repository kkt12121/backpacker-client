import { ReactElement, useEffect } from "react";
interface Props {
  planList: any[][];
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
        35.564213553753194,
        128.00169858059974
      ),
      level: 13,
      draggable: true,
    };
    // {address: "서울특별시 중구 세종대로 99", mapx: 126.9748047119,…}
    let map = new window.kakao.maps.Map(container, options);
    let mapTypeControl = new window.kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
    let zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
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

    let bounds = new window.kakao.maps.LatLngBounds();
  }, [planList]);
  return (
    <div
      id="myMap"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
      }}
    ></div>
  );
}
