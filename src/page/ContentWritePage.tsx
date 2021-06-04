import ContentWriteArea from "component/ContentWriteArea";
import { ReactElement } from "react";
import "../css/ContentWritePage.scss";
import ContentUpdateArea from "component/ContentUpdateArea";

export default function ContentWritePage(): ReactElement {
  const params = new URL(window.location.href).searchParams;
  // console.log("searchParams값" + params);
  let id = params.get("id");
  //let params = useParams<any>();
  //console.log("params값 수정" + params);
  // for (const [key, value] of Object.entries(params)) {
  //   console.log("params object 확인" + `${key}: ${value}`);
  // }
  // const test = () => {
  //   for (const [key, value] of Object.entries(params)) {
  //     console.log(`${key}: ${value}`);
  //   }
  // };
  // test();
  // const { id } = useParams<{ id?: string }>();
  // console.log("id확인 중 ...");
  // console.log(id); //undefined
  return <>{id ? <ContentUpdateArea id={id} /> : <ContentWriteArea />}</>;
}
