import { ReactElement, useState, useEffect } from "react";
import {
  contentItemMapClose,
  contentItemMapOpen,
} from "action/ModalClickAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import { useParams } from "react-router";
import "../css/EnterContentListItem.scss";
import axios from "axios";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconButton, Text } from "@chakra-ui/react";
import "dotenv/config";

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
    detail: string;
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

  const dispatch = useDispatch();
  const [contentItemData, setContentItemData] = useState<any>(null);

  const idNum = String(index);
  const clickHandler = () => {
    dispatch(contentItemMapOpen());
    setindex(index);
    firstindex(day);
    // console.log("e.target.id값" + e.target.id); //0
  };
  const { id } = useParams<{ id?: string }>();
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${process.env.REACT_APP_SERVER_URL}/content/${id}`).then((res) => {
        setContentItemData(res.data.itemArr);
      });
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <div className="enterContentItemBox">
          <div className="contentEnterImage">
            <img className="ImageContentPlace" src={props.img}></img>
          </div>
          <div className="enterContentTextInfoBox">
            <div className="placeAndPrice">
              <div>
                <Text className="contentPlaceName">{props.place}</Text>
              </div>
              <div className="contentPrice">
                <Text>
                  비용 : {new Intl.NumberFormat().format(props.price)}원
                </Text>
              </div>
            </div>
            <div className="btnInfoMap">
              <button
                className="enterDetailIcon"
                onClick={() => {
                  window.open(`${props.detail}`, "_blank");
                }}
              >
                <InfoOutlineIcon />
              </button>
              <IconButton
                id={idNum}
                ml={3}
                colorScheme="white"
                aria-label="mapInfo"
                fontSize="30px"
                className="btnContentItemMap"
                onClick={() => {
                  contentMapClickState
                    ? dispatch(contentItemMapClose())
                    : clickHandler();
                }}
              >
                <FaMapMarkerAlt
                  color="#db7070"
                  className="enterMapBtn"
                  onClick={() => {
                    contentMapClickState
                      ? dispatch(contentItemMapClose())
                      : clickHandler();
                  }}
                ></FaMapMarkerAlt>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="sectionLine"></div>
      </div>
    </>
  );
}
