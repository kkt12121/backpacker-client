import ContentWriteArea from "component/ContentWriteArea";
import ContentWriteAreaHeader from "component/ContentWriteAreaHeader";
import React, { ReactElement, useEffect } from "react";
import { useParams } from "react-router";
import "../css/ContentWritePage.scss";
import ContentUpdateArea from "component/ContentUpdateArea";

interface Props {}

export default function ContentWritePage({}: Props): ReactElement {
  let params = useParams();
  console.log("params값" + params);
  useEffect(() => {
    const test = () => {
      for (const [key, value] of Object.entries(params)) {
        console.log(`${key}: ${value}`);
      }
    };
    test();
  }, []);
  const { id } = useParams<{ id?: string }>();
  console.log("id확인 중 ...");
  console.log(id);
  return <>{id ? <ContentUpdateArea /> : <ContentWriteArea />}</>;
}
