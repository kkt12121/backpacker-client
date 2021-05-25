import React, { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import ContentItem from "./ContentItem";
import MapItemModal from "./MapItemModal";
import MapModal from "./MapModal";

interface Props {
  currentDay: number;
  planList: Object[][];
}

export default function ContentItemList({
  currentDay,
  planList,
}: Props): ReactElement {
  const content = useSelector((state: RootState) => state.test);
  const mapClickState = useSelector((state: RootState) => state.MapClick);
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );
  const [index, setIndex] = useState(0);
  return (
    <>
      {planList[currentDay] !== undefined
        ? planList[currentDay].map((el, index) => (
            <ContentItem index={el} id={index} setindex={setIndex} />
          ))
        : null}
      {mapItemClickState ? (
        <MapItemModal index={planList[currentDay][index]} />
      ) : null}
      {/* {mapClickState ? <MapModal index={planList[currentDay][index]} /> : null} */}
    </>
  );
}
