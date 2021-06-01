import React, { ReactElement, useState, useEffect } from "react";
import {
  contentItemMapClose,
  contentItemMapOpen,
} from "action/ModalClickAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import { useParams } from "react-router";
import "../css/EnterContentListItem.scss";
import axios from "axios";
import ContentItemMapModal from "./ContentItemMapModal";
interface Props {
  day?: any;
  firstindex?: any;
  setindex?: any;
  index: number;
  props: {
    place: string;
    img: string;
    mapx: number;
    mapy: number;
    price: number;
  };
}

export default function EnterContentListItem({
  day,
  props,
  firstindex,
  setindex,
  index,
}: Props): ReactElement {
  const contentMapClickState = useSelector(
    (state: RootState) => state.ContentItemMapClick
  );
  //map 기능
  const contentItemMapClickState = useSelector(
    (state: RootState) => state.ContentItemMapClick
  );
  const dispatch = useDispatch();
  const [contentItemData, setContentItemData] = useState<any>(null);
  let params = useParams();
  const test = () => {
    for (const [key, value] of Object.entries(params)) {
    }
  };
  test();
  const idNum = String(index);
  const clickHandler = (e: any) => {
    dispatch(contentItemMapOpen());
    setindex(e.target.id);
    firstindex(day);
    console.log("e.target.id값" + e.target.id); //0
  };
  const { id } = useParams<{ id?: string }>();
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`https://localhost:4000/content/${id}`).then((res) => {
        setContentItemData(res.data.itemArr);
      });
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <div className="listItem">
          <div className="contentPlaceName">
            <img src={props.img}></img>
          </div>
          <div className="contentPlaceName">{props.place}</div>
          <div>가격 : {props.price}</div>
          <button
            id={idNum}
            className="btnContentItemMap"
            onClick={(e) => {
              contentMapClickState
                ? dispatch(contentItemMapClose())
                : clickHandler(e);
            }}
          >
            M
          </button>
        </div>
        <div className="sectionLine"></div>
      </div>
    </>
  );
}
