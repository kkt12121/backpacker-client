import { ReactElement } from "react";

import { useSelector } from "react-redux";
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
  return (
    <>
      {/* <div className={mapItemClickState ? "mapItemModalOn" : "mapItemModal"}> */}
      <div className="mapItemModalOn">
        {mapItemClickState ? <ContentMapItem index={index} /> : null}
      </div>
    </>
  );
}
