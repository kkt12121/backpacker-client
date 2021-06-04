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
      await axios.get(`https://localhost:4000/content/${id}`).then((res) => {
        setContentItemData(res.data.itemArr);
      });
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <div className="contentItemBox">
          <div className="contentImage">
            <img src={props.img}></img>
          </div>
          <div className="enterContentTextInfoBox">
            <div className="placeAndPrice">
              <div className="contentPlace">
                <Text fontSize="x-large">{props.place}</Text>
              </div>
              <div className="contentPrice">
                <Text>
                  비용 : {new Intl.NumberFormat().format(props.price)}원
                </Text>
              </div>
            </div>
            <IconButton
              ml={20}
              variant="ghost"
              colorScheme="black"
              aria-label="detailInfo"
              fontSize="30px"
              className="detailIcon"
              icon={<InfoOutlineIcon />}
              onClick={() => {
                window.open(`${props.detail}`, "_blank");
              }}
            />
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
                color="black"
                className="mapBtn"
                onClick={() => {
                  contentMapClickState
                    ? dispatch(contentItemMapClose())
                    : clickHandler();
                }}
              ></FaMapMarkerAlt>
            </IconButton>
          </div>
        </div>
        <div className="sectionLine"></div>
      </div>
    </>
  );
}
