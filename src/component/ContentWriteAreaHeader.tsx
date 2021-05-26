import React, { ReactElement } from "react";
import "../css/ContentWriteAreaHeader.scss";
interface Props {}

export default function ContentWriteAreaHeader({}: Props): ReactElement {
  return (
    <>
      <div className="contentWriteAreaHeader">
        <div className="writerListBox">
          현재 작성자
          <div className="writerList">
            <span>징징이</span>
            <span>뚱이</span>
          </div>
        </div>
      </div>
    </>
  );
}
