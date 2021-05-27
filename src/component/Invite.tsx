import { useState } from "react";
import { useSelector } from "react-redux";
import ContentPageInvite from "component/ContentPageInvite";
import { useHistory } from "react-router-dom";
import { RootState } from "reducer";
import { IoClose } from "react-icons/io5";
import "../css/Invite.scss";
function Invite() {
  const buttonClickState = useSelector((state: RootState) => state.InviteClick);
  const history = useHistory();
  return (
    <>
      <div className="invitePageModalOn">
        <IoClose
          size={30}
          className="invitePageModalClose"
          onClick={() => {
            history.push("/");
          }}
        />
        <ContentPageInvite />
      </div>
    </>
  );
}

export default Invite;
