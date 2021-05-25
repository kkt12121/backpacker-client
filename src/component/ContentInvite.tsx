import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router";
import "../css/ContentInvite.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
interface Props {}

function ContentInvite({}: Props): ReactElement {
  const [inputValue, setInputValue] = useState("http://localhost:3000/content");
  const [inputText, setInputText] = useState(false);
  return (
    <>
      <div>
        <div className="inviteHeader">Invite</div>
        <div className="sectionButton">
          <button
            className="read"
            onClick={() => {
              setInputText(true);
              console.log(inputText);
              // <input value={inputValue} />;
            }}
          >
            공유
          </button>
          {/* <div className="buttonToggle">
          <input type="checkbox" id="check1" className="input" />
          <label htmlFor="check1" className="label">
            <span className="span">선택</span>
          </label>
        </div> */}
          <button className="readWrite">작성 공유</button>
        </div>
      </div>
      <div className="modalContent">
        {/* <textarea
          className="inputLink"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        /> */}
        <CopyToClipboard text={inputValue}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
    </>
  );
}
export default ContentInvite;
