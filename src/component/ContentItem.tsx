import React, { ReactElement } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentItem.scss";
import ContentPrice from "./ContentPrice";
import { mapItemClose, mapItemOpen } from "action/ModalClickAction";
interface Props {
  id: number;
  index: {
    title?: string;
    thumbnail?: string;
    mapx?: string;
    mapy?: string;
  };
  setindex?: any;
}

export default function ContentItem({
  index,
  id,
  setindex,
}: Props): ReactElement {
  const content = useSelector((state: RootState) => state.contentItemReducer);
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );
  const dispatch = useDispatch();

  const dropEvent = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.getData("text");
  };
  const clickHandler = (e: any) => {
    dispatch(mapItemOpen());
    setindex(e.target.id);
    console.log("e.target.id값" + e.target.id);
  };
  const idNum = String(id);
  return (
    <>
      {Object.keys(index).length === 0 ? null : (
        <>
          <DndProvider backend={HTML5Backend}>
            <div className="contentItemBox">
              <img className="contentImage" src={index.thumbnail} />
              <div className="contentPlaceBox">
                <div className="contentPlace"> {index.title}</div>
                <button
                  id={idNum}
                  onClick={(e) => {
                    mapItemClickState
                      ? dispatch(mapItemClose())
                      : clickHandler(e);
                  }}
                >
                  지도
                </button>
                {/* <IoClose size={40} className="deleteItem" onClick={() => {}} /> */}
              </div>
            </div>
            <ContentPrice />
          </DndProvider>
        </>
      )}
    </>
  );
}
