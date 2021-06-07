import {
  isClickCloseAction,
  loginModalClickAction,
  loginModalClickCloseAction,
} from "action/ModalClickAction";
import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import LoginModal from "./LoginModal";
import "../css/MenuCategory.scss";
import { Link } from "react-router-dom";
import logout from "./Logout";

export default function MenuCategory(): ReactElement {
  const isClickReducer = useSelector(
    (state: RootState) => state.ModalClickReducer
  );
  const loginModalState = useSelector(
    (state: RootState) => state.LoginModalClick
  );
  let token = localStorage.getItem("token");
  const dispatch = useDispatch();
  return (
    <>
      {isClickReducer ? <div className="modal"></div> : null}
      <div className={isClickReducer ? "menuCategoryOn" : "menuCategory"}>
        {token ? (
          <div>
            <ul className="loginMenu" onClick={logout}>
              로그아웃
            </ul>
            <ul className="signupMenu">
              <Link
                className="signupBtn"
                to="/mypage"
                onClick={() => {
                  dispatch(isClickCloseAction());
                }}
              >
                마이페이지
              </Link>
            </ul>
            <ul className="listMenu">
              <Link
                className="listBtn"
                to="/listpage"
                onClick={() => {
                  dispatch(isClickCloseAction());
                }}
              >
                여행지 리스트
              </Link>
            </ul>
            <ul className="listMenu">
              <Link
                className="listBtn"
                to="/contentwrite"
                onClick={() => {
                  dispatch(isClickCloseAction());
                }}
              >
                일정 작성
              </Link>
            </ul>
          </div>
        ) : (
          <div>
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
            <ul className="signupMenu">
              <Link
                className="signupBtn"
                to="/signup"
                onClick={() => {
                  dispatch(isClickCloseAction());
                }}
              >
                회원가입
              </Link>
            </ul>
            <ul className="listMenu">
              <Link
                className="listBtn"
                to="/listpage"
                onClick={() => {
                  dispatch(isClickCloseAction());
                }}
              >
                여행지 리스트
              </Link>
            </ul>
          </div>
        )}
      </div>
      <LoginModal />
    </>
  );
}
