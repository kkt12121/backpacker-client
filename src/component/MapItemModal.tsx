import { mapItemClose, mapItemOpen } from "action/ModalClickAction";
import React, { ReactElement } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/MapItemModal.scss";
import ContentMapItem from "./ContentMapItem";
interface Props {
  index: { title?: string; thumbnail?: string; mapx?: string; mapy?: string };
}
export default function MapItemModal({ index }: Props): ReactElement {
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );
  console.log(mapItemClickState);
  const dispatch = useDispatch();
  return (
    <>
      <div className={mapItemClickState ? "mapItemModalOn" : "mapItemModal"}>
        <IoClose
          size={40}
          className="mapItemModalClose"
          onClick={() => {
            dispatch(mapItemClose());
          }}
        />
        {mapItemClickState ? <ContentMapItem index={index} /> : null}
      </div>
    </>
  );
}
