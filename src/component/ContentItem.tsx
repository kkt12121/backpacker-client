import React, { ReactElement } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { RootState } from "reducer";
import "../css/ContentItem.scss";
import ContentPrice from "./ContentPrice";
import { mapItemClose, mapItemOpen } from "action/ModalClickAction";
import { IconButton, CloseButton } from "@chakra-ui/react";
import { InfoOutlineIcon, ViewIcon } from "@chakra-ui/icons";

interface Props {
  //   id: number;
  //   index: {
  //     title?: string;
  //     thumbnail?: string;
  //     mapx?: string;
  //     mapy?: string;
  //   };
  setindex?: any;
  el: any;
  idx: number;
  setplanList: React.Dispatch<React.SetStateAction<Object[][]>>;
  planList: Object[][];
}

export default function ContentItem({
  el,
  idx,
  setindex,
  setplanList,
  planList,
}: Props): ReactElement {
  const content = useSelector((state: RootState) => state.contentItemReducer);
  const mapItemClickState = useSelector(
    (state: RootState) => state.MapItemClick
  );
  const dispatch = useDispatch();
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);

  const clickHandler = (e: any) => {
    dispatch(mapItemOpen());
    setindex(e.target.id);
    console.log("e.target.id값" + e.target.id);
  };
  const idNum = String(idx);

  const handleDeleteItem = () => {
    let copy = [...planList];
    delete copy[currentDay][idx];

    const sortPlanList = copy.map((el) => {
      return el.filter((ele) => {
        if (ele !== undefined) {
          return ele;
        }
      });
    });

    setplanList(sortPlanList);
  };
  // InfoOutlineIcon
  return (
    <>
      {Object.keys(el).length === 0 ? null : (
        <Draggable draggableId={el.contentId} index={idx}>
          {(provided, snapshot) => (
            <>
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={snapshot.isDragging ? "droppableList" : "planitem"}
              >
                <div className="contentItemBox">
                  <img className="contentImage" src={el.img} />
                  <div className="contentTextInfoBox">
                    <div className="contentPlaceBox">
                      <div className="contentPlace"> {el.place}</div>
                      <IconButton
                        variant="ghost"
                        colorScheme="black"
                        aria-label="detailInfo"
                        fontSize="20px"
                        icon={<InfoOutlineIcon />}
                        id={idNum}
                        onClick={() => {
                          window.open(`${el.detail}`, "_blank");
                        }}
                      />

                      <IconButton
                        variant="ghost"
                        colorScheme="black"
                        aria-label="mapInfo"
                        fontSize="20px"
                        icon={
                          <ViewIcon
                            id={idNum}
                            onClick={(e) => {
                              mapItemClickState
                                ? dispatch(mapItemClose())
                                : clickHandler(e);
                            }}
                          />
                        }
                      />

                      {/* <button
                      id={idNum}
                      onClick={(e) => {
                        mapItemClickState
                          ? dispatch(mapItemClose())
                          : clickHandler(e);
                      }}
                    >
                      M
                    </button> */}
                      <CloseButton size="lg" onClick={handleDeleteItem} />
                    </div>
                    <ContentPrice
                      index={idx}
                      setplanList={setplanList}
                      planList={planList}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </Draggable>
      )}
    </>
  );
}
