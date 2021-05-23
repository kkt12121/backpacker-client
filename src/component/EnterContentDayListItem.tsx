import React, { ReactElement } from "react";
import EnterContentList from "./EnterContentList";
interface Props {}

export default function EnterContentDayListItem({}: Props): ReactElement {
  return (
    <>
      <div className="contentDay">
        <div className="contentBodyTitle">
          <div className="contentDayFirstSection">Day1</div>
          <div className="contentDaySecondSection">
            <div>2021.05.05</div>
            <div className="">서울</div>
          </div>
        </div>
        <div className="contentBodyList">
          <EnterContentList></EnterContentList>
        </div>
      </div>
    </>
  );
}
