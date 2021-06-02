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
    <section className="mainsection2">
      <h2 data-aos="fade-right" className="section2text">
        예산에 맞게 여행계획을 만들어보세요
      </h2>
      <div data-aos="fade-right" className="newcontentgif">
        <img src="https://media1.tenor.com/images/2724b55c365d0b4e995c8796606e5e80/tenor.gif?itemid=14625359"></img>
      </div>
    </section>
  );
}

export default MainSection2;
