import ContentCarousel from "component/ContentCarousel";
import EnterContentDayList from "component/EnterContentDayList";
import Footer from "component/Footer";
import ContentItemMapModal from "../component/ContentItemMapModal";
import InviteModal from "component/InviteModal";
import "../css/EnterContentPage.scss";
import { inviteClose, inviteOpen } from "action/ModalClickAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import { InviteClick } from "reducer/ModalClickReducer";
import { ContentAction } from "action/ContentAction";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EnterContentPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  let params = useParams();
  const test = () => {
    for (const [key, value] of Object.entries(params)) {
      console.log(`${key}: ${value}`);
    }
  };
  test();
  const { id } = useParams<{ id?: string }>();
  console.log(id);
  //invite 기능
  const inviteClickState = useSelector((state: RootState) => state.InviteClick);
  //map 기능
  const contentItemMapClickState = useSelector(
    (state: RootState) => state.ContentItemMapClick
  );
  //컨텐츠 데이터 불러오기
  const stateData = useSelector(
    (state: RootState) => state.ContentReducer.items
  );
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios.get(`https://localhost:4000/content/`).then((res) => {
  //       console.log(res);
  //       setData(res.data.data[0]);
  //       setLoading(false);
  //     });
  //   };
  //   fetchData();
  // });
  return (
    <>
      <div className="contentPage">
        <section className="contentHeader">
          <div>
            <div className="contentTitle">21/05/20 ~ 21/05/25 제주도 여행</div>
            <div className="contentDate">작성날짜 : 21년05월19일</div>
          </div>
          <div>
            <button
              className="btnInvite"
              onClick={() => {
                inviteClickState
                  ? dispatch(inviteClose())
                  : dispatch(inviteOpen());
              }}
            >
              INVITE
            </button>
          </div>
        </section>
        <section className="writeParticipant">
          <div className="writeParticipantTitle">작성 참여자</div>
          <div className="participant">1번</div>
          <div className="participant">2번</div>
          <div className="participant">3번</div>
        </section>
        {/* <section className="contentCarousel">
          <ContentCarousel />
        </section> */}
        <section>
          <div className="contentBody">
            <EnterContentDayList />
          </div>
        </section>
        <section className="buttonList">
          <button>목록으로</button>
          <button>수정</button>
          <button>삭제</button>
        </section>
        <Footer></Footer>
      </div>
      {contentItemMapClickState ? <ContentItemMapModal /> : null}
      {inviteClickState ? <InviteModal /> : null}
    </>
  );
}
