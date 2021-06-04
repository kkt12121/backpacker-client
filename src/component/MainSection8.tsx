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
      <div className="img">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=40"></img>
      </div>
      <FaArrowCircleUp
        className="scrollToTopButton"
        onClick={handleClick}
      ></FaArrowCircleUp>
    </section>
  );
};

export default MainSection8;
