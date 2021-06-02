import React, { ReactElement, useState } from "react";
import "../css/Navbar.scss";
import MenuCategory from "./MenuCategory";
import { useDispatch, useSelector } from "react-redux";
import {
  isClickAction,
  isClickCloseAction,
  loginModalClickAction,
  loginModalClickCloseAction,
} from "action/ModalClickAction";
import { RootState } from "reducer";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import logout from "./Logout";
import classNames from "classnames";
import logo from "./video/logo.png";
import { Text } from "@chakra-ui/layout";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  let token = localStorage.getItem("token");
  let dispatch = useDispatch();
  const loginModalState = useSelector(
    (state: RootState) => state.LoginModalClick
  );
  const isClickReducer = useSelector(
    (state: RootState) => state.ModalClickReducer
  );
  return (
    <nav className="nav">
      <Link className="logoBox" to="/">
        <div className="navLogo">
          <img className="logoImg" src={logo} />
          <Text
            className="logoName"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontWeight="bold"
            fontFamily="monospace"
          >
            BACKPACKER
          </Text>
        </div>
      </Link>
      <ol className="mobileOl">
        {token ? (
          <>
            <ul onClick={logout}>
              로그아웃
              <div className={classNames("mobileLine", "logoutLine")}></div>
            </ul>

            <ul>
              {" "}
              <Link
                to="/mypage"
                onClick={() => {
                  dispatch(isClickCloseAction());
                }}
              >
                마이페이지
              </Link>
              <div className={classNames("mobileLine", "mypageLine")}></div>
            </ul>
            <ul>
              {" "}
              <Link
                to="/listpage"
                onClick={() => {
                  dispatch(isClickCloseAction());
                }}
              >
                여행지 리스트
              </Link>
              <div className={classNames("mobileLine", "listLine")}></div>
            </ul>
            <ul>
              {" "}
              <Link
                to="/contentwrite"
                onClick={() => {
                  dispatch(isClickCloseAction());
                }}
              >
                여행 일정 만들기
              </Link>
              <div className={classNames("mobileLine", "planLine")}></div>
            </ul>
          </>
        ) : (
          <>
            {" "}
            <ul
              onClick={() => {
                loginModalState
                  ? dispatch(loginModalClickCloseAction())
                  : dispatch(loginModalClickAction());
              }}
            >
              로그인
              <div className={classNames("mobileLine", "loginLine")}></div>
            </ul>
            <ul>
              {" "}
              <Link
                to="/signup"
                onClick={() => {
                  dispatch(isClickCloseAction());
                }}
              >
                회원가입
              </Link>
              <div className={classNames("mobileLine", "signupLine")}></div>
            </ul>
            <ul>
              {" "}
              <Link
                to="/listpage"
                onClick={() => {
                  dispatch(isClickCloseAction());
                }}
              >
                여행지 리스트
              </Link>
              <div className={classNames("mobileLine", "listLine")}></div>
            </ul>
          </>
        )}
      </ol>
      <div
        className={isClickReducer ? "hamburgerMenuOn" : "hamburgerMenu"}
        // onClick={() => (isClick ? setisClick(false) : setisClick(true))}
        onClick={() => {
          isClickReducer
            ? dispatch(isClickCloseAction())
            : dispatch(isClickAction());
        }}
      >
        <div className="hamburgerStick1"></div>
        <div className="hamburgerStick2"></div>
        <div className="hamburgerStick3"></div>
        {console.log()}
      </div>
      <MenuCategory />
    </nav>
  );
}
