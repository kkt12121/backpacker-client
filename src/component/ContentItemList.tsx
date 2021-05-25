import React, { ReactElement, useState } from "react";
import {
  DragDropContext,
  Droppable,
  DropResult,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import ContentItem from "./ContentItem";
import MapItemModal from "./MapItemModal";
import MapModal from "./MapModal";

interface Props {
  currentDay: number;
  planList: Object[][];
  onDragEnd: OnDragEndResponder;
}

export default function ContentItemList({
  currentDay,
  planList,
  onDragEnd,
}: Props): ReactElement {
  const content = useSelector((state: RootState) => state.test);
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );
  const [index, setIndex] = useState(0);
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {planList[currentDay] !== undefined
                ? planList[currentDay].map((el, idx) => (
                    <ContentItem el={el} idx={idx} key={Math.random()}  setindex={setIndex} />
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
