import React, { ReactElement, useEffect } from "react";

interface Props {}
declare global {
  interface Window {
    kakao: any;
  }
}
export default function ContentMap({}: Props): ReactElement {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);
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
