import { contentItemMapClose, mapOpen } from "action/ModalClickAction";
import React, { ReactElement } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentItemMapModal.scss";
import ContentItemMap from "./ContentItemMap";
interface Props {}

export default function ContentItemMapModal({}: Props): ReactElement {
  const mapClickState = useSelector(
    (state: RootState) => state.ContentItemMapClick
  );
  console.log(mapClickState);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={
          mapClickState ? "contentItemMapModalOn" : "contentItemMapModal"
        }
      >
        <IoClose
          size={40}
          className="contentItemMapModalClose"
          onClick={() => {
            dispatch(contentItemMapClose());
          }}
        />
        {mapClickState ? <ContentItemMap /> : null}
      </div>
    </>
  );
}
