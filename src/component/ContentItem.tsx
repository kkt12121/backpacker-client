import React, { ReactElement } from "react";
import "../css/ContentItem.scss";
import ContentPrice from "./ContentPrice";
interface Props {}

export default function ContentItem({}: Props): ReactElement {
  return (
    <>
      <div className="contentItemBox">
        <img
          className="contentImage"
          src="https://pbs.twimg.com/media/Dc0Uy8rUQAAspWU.jpg:large"
        />
        <div className="contentPlaceBox">
          <div className="contentPlace"> 맛집</div>
        </div>
      </div>
      <ContentPrice />
    </>
  );
}
