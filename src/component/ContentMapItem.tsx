import { CloseButton } from "@chakra-ui/react";
import { mapItemClose } from "action/ModalClickAction";
import { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
  index: { title?: string; thumbnail?: string; mapx?: string; mapy?: string };
}
declare global {
  interface Window {
    kakao: any;
  }
}
export default function ContentMapItem({ index }: Props): ReactElement {
  // console.log("mapx는 " + index.mapx);
  // console.log("mapy는 " + index.mapy);
  const dispatch = useDispatch();
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
        width: "100%",
        height: "100%",
        borderRadius: "10px",
      }}
    >
      <CloseButton
        style={{ position: "relative", zIndex: 3 }}
        onClick={() => {
          dispatch(mapItemClose());
        }}
      />
    </div>
  );
}
