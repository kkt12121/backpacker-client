import { ReactElement } from "react";
import "../css/MainSection5.scss";
import inviteGif from "./video/contentInvite.gif";
interface Props {}

export default function MainSection5({}: Props): ReactElement {
  return (
    <section className="mainSection5">
      <img className="mainSection5Image" src={inviteGif} />
      <h2 className="mainSection5Text">
        일정표에 친구들을 초대해 보세요 !
        <p>
          친구들과 함께 여행 일정을 <br /> 계획 할 수 있습니다.
        </p>
      </h2>
    </section>
  );
}
