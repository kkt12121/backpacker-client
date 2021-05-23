import React, { ReactElement } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentItem.scss";
import ContentPrice from "./ContentPrice";
interface Props {
  index: { title?: string; thumbnail?: string };
}

export default function ContentItem({ index }: Props): ReactElement {
  const content = useSelector((state: RootState) => state.contentItemReducer);

  const dropEvent = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.getData("text");
  };

  return (
    <>
      {Object.keys(index).length === 0 ? null : (
        <>
          <DndProvider backend={HTML5Backend}>
            <div className="contentItemBox">
              <img className="contentImage" src={index.thumbnail} />
              <div className="contentPlaceBox">
                <div className="contentPlace"> {index.title}</div>
                {/* <IoClose size={40} className="deleteItem" onClick={() => {}} /> */}
              </div>
            </div>
            <ContentPrice />
          </DndProvider>
        </>
      )}
    </>
  );
}
