import { Link } from "react-router-dom";
import "../css/MainSection1.scss";

function MainSection1() {
  return (
    <section className="mainsection1">
      <div className="section1text">
        <h2 className="title1">여행의 시작을 BACKPACKER와 함께하세요</h2>
        <Link className="startBtn" to="listpage">
          여행 시작하기
        </Link>
      </div>
    </section>
  );
}

export default MainSection1;
