import React, { ReactElement } from "react";
import "../css/ContentPageInvite.scss";
import { useHistory } from "react-router-dom";
interface Props {}

function ContentPageInvite({}: Props): ReactElement {
  const history = useHistory();
  let token = localStorage.getItem("token");
  return (
    <>
      <div className="invitePageModal">
        <div className="invitePageHeader">
          누구누구님께서 무슨무슨 게시물에 초대하셨습니다
        </div>
        <div className="sectionButton">
          <button
            className="btnOk"
            onClick={() => {
              token ? history.push("/content") : history.push("/signup");
            }}
          >
            Ok
          </button>
          <button
            className="btnCancel"
            onClick={() => {
              history.push("/");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
export default ContentPageInvite;
