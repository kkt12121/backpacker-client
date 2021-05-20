import React, { ReactElement } from "react";
import ContentItem from "./ContentItem";

interface Props {}

export default function ContentItemList({}: Props): ReactElement {
  return (
    <>
      <ContentItem />
      <ContentItem />
      <ContentItem />
    </>
  );
}
