import React, { ReactElement } from "react";
import EnterContentDayListItem from "./EnterContentDayListItem";
interface Props {}

export default function EnterContentDayList({}: Props): ReactElement {
  return (
    <>
      <EnterContentDayListItem />
      <EnterContentDayListItem />
      <EnterContentDayListItem />
    </>
  );
}
