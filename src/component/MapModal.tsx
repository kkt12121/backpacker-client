import { ReactElement } from "react";

import { useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/MapModal.scss";
import ContentMap from "./ContentMap";

interface Props {
  planList: Object[][];
}
export default function MapModal({ planList }: Props): ReactElement {
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  // console.log(mapClickState);

  return (
    <>
      {/* <div className={mapClickState ? "mapModalOn" : "mapModal"}>
        <IoClose
          size={40}
          className="mapModalClose"
          onClick={() => {
            dispatch(mapClose());
          }}
        /> */}
      <div className="mapModalOn">
        {mapClickState ? (
          <>
            <ContentMap planList={planList} />
          </>
        ) : null}
      </div>
      {/* </div> */}
    </>
  );
}
