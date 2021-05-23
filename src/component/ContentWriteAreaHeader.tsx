import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentWriteAreaHeader.scss";
interface Props {
  setcurrentDay: React.Dispatch<React.SetStateAction<number>>;
}

export default function ContentWriteAreaHeader({
  setcurrentDay,
}: Props): ReactElement {
  const state = useSelector((state: RootState) => state.test);
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
        {/* <div className="dayBox">
          {state.data.map((el) => {
            return (
              <button
                onClick={() => {
                  setcurrentDay(Number(el.day) - 1);
                }}
              >
                day {el.day}
              </button>
            );
          })}
        </div> */}
      </div>
    </>
  );
}
