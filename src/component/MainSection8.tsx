import Aos from "aos";
import { useEffect } from "react";
import CountUp from "react-countup";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import "../css/MainSection8.scss";
const MainSection8 = () => {
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="mainSection8">
      <div className="content">
        <div className="userCountContainer">
          현재{" "}
          <CountUp end={138274} duration={1} redraw={true}>
            {({ countUpRef, start }): any => {
              return (
                <VisibilitySensor onChange={start} delayedCall>
                  <span className="userCount" ref={countUpRef} />
                </VisibilitySensor>
              );
            }}
          </CountUp>{" "}
          명의 사용자들이 BACKPACKER를 이용하고 있습니다.
        </div>

        <div className="sectionTitle">BACKPACKER</div>
        <Link className="btnStart" to="listpage">
          <button className="buttonStart">NOW START</button>
        </Link>
      </div>
      <FaArrowCircleUp
        className="scrollToTopButton"
        onClick={handleClick}
      ></FaArrowCircleUp>
    </section>
  );
};

export default MainSection8;
