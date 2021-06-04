import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../css/MainSection6.scss";
import listpageGif from "./video/contentList2.gif";
function MainSection6() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="mainSection6">
      <h2 data-aos="fade-right" className="mainSection6Title">
        다양한 여행정보를 <br />
        BACKPACKER에서 확인하세요
      </h2>
      <div className="listPhoto">
        <img data-aos="fade-right" src={listpageGif}></img>
      </div>
    </section>
  );
}

export default MainSection6;
