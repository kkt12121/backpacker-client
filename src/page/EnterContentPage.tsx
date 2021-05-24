import * as React from "react";
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

export default function EnterContentPage() {
  const inviteClickState = useSelector((state: RootState) => state.InviteClick);
  const contentItemMapClickState = useSelector(
    (state: RootState) => state.ContentItemMapClick
  );
  const dispatch = useDispatch();
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
        <section className="contentCarousel">
          <ContentCarousel />
        </section>
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
