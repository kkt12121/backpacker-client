import {
  loginModalClickAction,
  loginModalClickCloseAction,
} from "action/ModalClickAction";
import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import LoginModal from "./LoginModal";
import "../css/MenuCategory.scss";
interface Props {}

export default function MenuCategory({}: Props): ReactElement {
  const isClickReducer = useSelector(
    (state: RootState) => state.ModalClickReducer
  );
  const loginModalState = useSelector(
    (state: RootState) => state.LoginModalClick
  );
  const dispatch = useDispatch();
  return (
    <>
      {isClickReducer ? <div className="modal"></div> : null}
      <div className={isClickReducer ? "menuCategoryOn" : "menuCategory"}>
        <ul
          className="loginMenu"
          onClick={() => {
            loginModalState
              ? dispatch(loginModalClickCloseAction())
              : dispatch(loginModalClickAction());
          }}
        >
          로그인
        </ul>
        <ul className="signupMenu">회원가입</ul>
      </div>
      <LoginModal />
    </>
  );
}
