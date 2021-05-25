import React, { ReactElement } from "react";
import {
  DragDropContext,
  Droppable,
  DropResult,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import ContentItem from "./ContentItem";

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

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {planList[currentDay] !== undefined
                ? planList[currentDay].map((el, idx) => (
                    <ContentItem el={el} idx={idx} key={Math.random()} />
                  ))
                : null}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
