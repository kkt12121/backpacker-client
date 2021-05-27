import React, { ReactElement, useState } from "react";
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import ContentItem from "./ContentItem";
import MapItemModal from "./MapItemModal";
import MapModal from "./MapModal";

interface Props {
  planList: Object[][];
  onDragEnd: OnDragEndResponder;
  setplanList: React.Dispatch<React.SetStateAction<Object[][]>>;
}

export default function ContentItemList({
  planList,
  onDragEnd,
  setplanList,
}: Props): ReactElement {
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );
  const [index, setIndex] = useState(0);
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <div
              className="planItemTable"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {planList[currentDay] !== undefined
                ? planList[currentDay].map((el, idx) => (
                    <ContentItem
                      el={el}
                      idx={idx}
                      key={Math.random()}
                      setindex={setIndex}
                      setplanList={setplanList}
                      planList={planList}
                    />
                  ))
                : null}
              {mapItemClickState ? (
                <MapItemModal index={planList[currentDay][index]} />
              ) : null}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
