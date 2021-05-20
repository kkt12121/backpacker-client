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
        <div className="dayBox">
          <button>Day 1</button>
          <button>Day 2</button>
          <button>Day 3</button>
          <button>일정 추가</button>
        </div>
      </div>
    </>
  );
}
