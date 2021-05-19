import { loginModalClickCloseAction } from "action/ModalClickAction";
import React, { ReactElement } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/LoginModal.scss";

interface Props {}

export default function LoginModal({}: Props): ReactElement {
  const dispatch = useDispatch();
  const loginModalState = useSelector(
    (state: RootState) => state.LoginModalClick
  );
  return (
    <>
      <div className={loginModalState ? "loginModalOn" : "loginModal"}>
        <IoClose
          size={40}
          className="loginModalClose"
          onClick={() => {
            dispatch(loginModalClickCloseAction());
          }}
        />
      </div>
    </>
  );
}
