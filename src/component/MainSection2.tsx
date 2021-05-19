import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../css/MainSection2.scss";

function MainSection2() {
  //   window.addEventListener("scroll", function (e) {
  //     console.log(window.scrollY);
  //   });
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section data-aos="fade-right" className="mainsection2">
      <h2 className="section2text">예산에 맞게 여행계획을 만들어보세요</h2>
      <div className="newcontentgif">
        <img src="https://media1.tenor.com/images/18a2caf269e1b27a245541ad530bef96/tenor.gif?itemid=8856772"></img>
      </div>
    </section>
  );
}

export default MainSection2;
