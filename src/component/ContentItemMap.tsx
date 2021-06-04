import React, { ReactElement, useEffect } from "react";
import { CloseButton } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { contentItemMapClose } from "action/ModalClickAction";
interface Props {
  index: { mapx?: string; mapy?: string };
}
declare global {
  interface Window {
    kakao: any;
  }
}
function ContentItemMap({ index }: Props): ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(index);
    const container = document.getElementById("myMap");
    const options = {
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
    >
      <CloseButton
        style={{ position: "relative", zIndex: 3 }}
        onClick={() => {
          dispatch(contentItemMapClose());
        }}
      />
    </div>
  );
}
export default ContentItemMap;
//지금 작성하는 해당 코드는 인풋값을 입력받아 지도에서 해당 위치를 불러오는 기능이다.
//위도, 경도 값을 알면 해당하는
//이렇게 사용하면 된다. https://map.kakao.com/link/map/37.402056,127.108212
