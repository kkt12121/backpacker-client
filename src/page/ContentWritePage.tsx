import ContentWriteArea from "component/ContentWriteArea";
import ContentWriteAreaHeader from "component/ContentWriteAreaHeader";
import React, { ReactElement } from "react";
import "../css/ContentWritePage.scss";

interface Props {}

export default function ContentWritePage({}: Props): ReactElement {
  return (
    <>
      <ContentWriteArea />
    </>
  );
}
