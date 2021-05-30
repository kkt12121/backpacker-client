import React, { ReactElement } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { RootState } from "reducer";
import "../css/ContentItem.scss";
import ContentPrice from "./ContentPrice";
import { mapItemClose, mapItemOpen } from "action/ModalClickAction";
interface Props {
  setindex?: any;
  el: any;
  idx: number;
  setplanList: React.Dispatch<React.SetStateAction<Object[][]>>;
  planList: Object[][];
}

export default function ContentItem({
  el,
  idx,
  setindex,
  setplanList,
  planList,
}: Props): ReactElement {
  const content = useSelector((state: RootState) => state.contentItemReducer);
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );
  const dispatch = useDispatch();
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);

  const clickHandler = (e: any) => {
    dispatch(mapItemOpen());
    setindex(e.target.id);
    console.log("e.target.id값" + e.target.id);
  };
  const idNum = String(idx);

  const handleDeleteItem = () => {
    let copy = [...planList];
    delete copy[currentDay][idx];
    setplanList(copy);
  };
  return (
    <>
      {Object.keys(el).length === 0 ? null : (
        <Draggable draggableId={el.contentId} index={idx}>
          {(provided, snapshot) => (
            <>
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={snapshot.isDragging ? "droppableList" : "planitem"}
              >
                <div className="contentItemBox">
                  <img className="contentImage" src={el.img} />
                  <div className="contentPlaceBox">
                    <div className="contentPlace"> {el.place}</div>
                    <button
                      id={idNum}
                      onClick={() => {
                        window.open(`${el.detail}`, "_blank");
                      }}
                    >
                      i
                    </button>
                    <button
                      id={idNum}
                      onClick={(e) => {
                        mapItemClickState
                          ? dispatch(mapItemClose())
                          : clickHandler(e);
                      }}
                    >
                      M
                    </button>
                    <IoClose
                      size={40}
                      className="deleteItem"
                      onClick={handleDeleteItem}
                    />
                  </div>
                </div>
                <ContentPrice
                  index={idx}
                  setplanList={setplanList}
                  planList={planList}
                />
              </div>
            </>
          )}
        </Draggable>
      )}
    </>
  );
}
