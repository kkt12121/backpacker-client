import React, { ReactElement, useState } from "react";
import "../css/Navbar.scss";
import MenuCategory from "./MenuCategory";
import { useDispatch, useSelector } from "react-redux";
import { isClickAction, isClickCloseAction } from "action/ModalClickAction";
import { RootState } from "reducer";
import Modal from "./Modal";
interface Props {}

export default function Navbar({}: Props): ReactElement {
  let dispatch = useDispatch();
  const isClickReducer = useSelector(
    (state: RootState) => state.ModalClickReducer
  );
  return (
    <nav className="nav">
      <img
        className="navLogo"
        src="http://pngimg.com/uploads/nike/nike_PNG1.png"
      />
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
