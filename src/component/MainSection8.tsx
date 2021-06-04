import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/MainSection8.scss";
const MainSection8 = () => {
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <section className="mainSection8">
      <div className="content">
        <div className="sectionTitle">BACKPACKER</div>
        <div className="buttonStart">
          <Link className="btnStart" to="listpage">
            NOW START
          </Link>
        </div>
      </div>
      <FaArrowCircleUp
        className="scrollToTopButton"
        onClick={handleClick}
      ></FaArrowCircleUp>
    </section>
  );
};

export default MainSection8;
