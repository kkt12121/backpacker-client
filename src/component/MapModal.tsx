import { mapClose, mapOpen } from "action/ModalClickAction";
import React, { ReactElement } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/MapModal.scss";
import ContentMap from "./ContentMap";
interface Props {
  planList: Object[][];
}
export default function MapModal({ planList }: Props): ReactElement {
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  console.log(mapClickState);
  const dispatch = useDispatch();
  return (
    <>
      <div className={mapClickState ? "mapModalOn" : "mapModal"}>
        <IoClose
          size={40}
          className="mapModalClose"
          onClick={() => {
            dispatch(mapClose());
          }}
        />
        {mapClickState ? <ContentMap planList={planList} /> : null}
      </div>
    </>
  );
}
