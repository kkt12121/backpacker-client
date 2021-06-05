import Aos from "aos";
import { useEffect } from "react";
import "../css/MainSection7.scss";
function MainSection7() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="mainSection7">
      <h2 className="mainSection7Title">
        사용자들의 솔직한 리뷰를 확인할 수 있습니다
        <div className="reviewContainer">
          <div className="reviewCard">
            <div className="reviewHeader">
              <img
                className="reviewProfile"
                src={
                  "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                }
              />
              대전 불주먹
            </div>
            <div className="reviewRating">
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
            </div>
            <p className="reviewContent">
              친구들과 제주도 여행을 계획했었는데 서로 계획을 짜기 싫다고
              미뤘어요. BACKPACKER의 친구와 함께 계획을 짜고 보여주면서 제주도
              여행을 쉽게 계획할 수 있었습니다. BACKPACKER 완전 좋아요!
            </p>
          </div>
          <div className="reviewCard">
            <div className="reviewHeader">
              <img
                className="reviewProfile"
                src={
                  "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                }
              />
              강원도 피바라기
            </div>
            <div className="reviewRating">
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
            </div>
            <p className="reviewContent">
              무작정 부산여행을 가고싶었어요. 어디로 가야할지도 생각해보지도
              않았고 그냥 떠나고 싶었습니다. 그러던 도중 우연히 BACKPACKER를
              알게 되어서 사람들이 많이 가는 장소를 알게 되어서 편하게 여행
              계획을 세웠어요
            </p>
          </div>
          <div className="reviewCard">
            <div className="reviewHeader">
              <img
                className="reviewProfile"
                src={
                  "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                }
              />
              서울 깍쟁이
            </div>
            <div className="reviewRating">
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
              <img
                className="reviewStar"
                src={
                  "https://littledeep.com/wp-content/uploads/2020/09/star-icon-style1.png"
                }
              />
            </div>
            <p className="reviewContent">
              여행을 가는데 굳이 제가 일정을 짜지 않아도 되서 너무 편했어요!
              저는 귀찮아하는 스타일이라서 다른사람들이 작성해놓은 여행지 그대로
              여행을 떠났답니다. 다른 사용자들이 정해놓은 비용 그대로 여행을
              떠나보았어요!
            </p>
          </div>
        </div>
      </h2>
      <div>{/* <p>(fake data 넣은 것들을 보여주기)</p> */}</div>
    </section>
  );
}

export default MainSection7;
