import { Link } from "react-router-dom";
import "../css/MainSection1.scss";
import GuestTrialModal from "./GuestTrialModal";
import vacation from "./video/vacation.mp4";

function MainSection1() {
  let token = localStorage.getItem("token");
  return (
    <section className="mainsection1">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      >
        <source src={vacation} type="video/mp4" />
      </video>
      <div className="section1text">
        <h2 className="title1">여행의 시작을 BACKPACKER와 함께하세요</h2>

        {token ? (
          <Link className="startBtn" to="contentwrite">
            NOW START
          </Link>
        ) : (
          <GuestTrialModal />
        )}
      </div>
    </section>
  );
}

export default MainSection1;
