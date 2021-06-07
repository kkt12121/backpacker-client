import { inviteClose } from "action/ModalClickAction";
import { ReactElement } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/InviteModal.scss";
import ContentInvite from "./ContentInvite";

export default function InviteModal(): ReactElement {
  const buttonClickState = useSelector((state: RootState) => state.InviteClick);
  const dispatch = useDispatch();
  return (
    <>
      <div className={buttonClickState ? "inviteModalOn" : "inviteModal"}>
        <IoClose
          size={30}
          className="inviteModalClose"
          onClick={() => {
            dispatch(inviteClose());
          }}
        />
        {buttonClickState ? <ContentInvite /> : null}
      </div>
    </>
  );
}
