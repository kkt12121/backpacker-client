import ContentWriteArea from "component/ContentWriteArea";
import ContentWriteAreaHeader from "component/ContentWriteAreaHeader";
import React, { ReactElement } from "react";

interface Props {}

export default function ContentWritePage({}: Props): ReactElement {
  return (
    <>
      <ContentWriteArea />
    </>
  );
}
