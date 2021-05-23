import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import ContentItem from "./ContentItem";

interface Props {
  currentDay: number;
  planList: Object[][];
}

export default function ContentItemList({
  currentDay,
  planList,
}: Props): ReactElement {
  const content = useSelector((state: RootState) => state.test);

  return (
    <>
      {planList[currentDay] !== undefined
        ? planList[currentDay].map((el) => <ContentItem index={el} />)
        : null}
    </>
  );
}
