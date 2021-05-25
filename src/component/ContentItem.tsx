import React, { ReactElement } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentItem.scss";
import ContentPrice from "./ContentPrice";
interface Props {
  el: any;
  idx: number;
}

export default function ContentItem({ el, idx }: Props): ReactElement {
  const content = useSelector((state: RootState) => state.contentItemReducer);

  return (
    <>
      {Object.keys(el).length === 0 ? null : (
        <Draggable draggableId={el.contentid} index={idx}>
          {(provided, snapshot) => (
            <>
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={snapshot.isDragging ? "droppableList" : ""}
              >
                <div className="contentItemBox">
                  <img className="contentImage" src={el.thumbnail} />
                  <div className="contentPlaceBox">
                    <div className="contentPlace"> {el.title}</div>
                    {/* <IoClose size={40} className="deleteItem" onClick={() => {}} /> */}
                  </div>
                </div>
                <ContentPrice />
              </div>
            </>
          )}
        </Draggable>
      )}
    </>
  );
}
