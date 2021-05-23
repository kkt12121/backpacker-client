import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router";
import "../css/ContentInvite.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
interface Props {}

function ContentInvite({}: Props): ReactElement {
  const [inputValue, setInputValue] = useState("http://localhost:3000/content");
  const [check, setCheck] = useState("");
  return (
    <>
      <div className="sectionButton">
        <div className="read">읽기</div>
        <div className="buttonToggle">
          <input type="checkbox" id="check1" className="input" />
          <label htmlFor="check1" className="label">
            <span className="span">선택</span>
          </label>
        </div>
        <div className="readWrite">읽기/쓰기</div>
      </div>
      <div className="modalContent">
        <textarea
          className="inputLink"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <CopyToClipboard text={inputValue}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
    </>
  );
}
export default ContentInvite;
