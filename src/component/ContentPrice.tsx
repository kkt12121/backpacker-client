import React, { ReactElement } from "react";
import "../css/ContentPrice.scss";
interface Props {}

export default function ContentPrice({}: Props): ReactElement {
  return (
    <>
      <div className="contentPriceBox">
        <input
          className="contentPriceInput"
          type="textbox"
          placeholder=" 예상 경비 금액 : 10조원"
        />
      </div>
    </>
  );
}
