import React, { ReactElement } from "react";
import "../css/ContentSearch.scss";
interface Props {}

export default function ContentSearch({}: Props): ReactElement {
  return (
    <div className="contentSearchBox">
      <input className="contentSearchInput" />
      <button className="contentSearchButton">Search</button>
    </div>
  );
}
