import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "../css/MainSection8.scss";

const MainSection8 = () => {
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <section>
      <div className="buttonStart">
        NOW START
        {/* <Link to="/">NOW START</Link> */}
      </div>
      <FaArrowCircleUp
        className="scrollToTopButton"
        onClick={handleClick}
      ></FaArrowCircleUp>
    </section>
  );
};

export default MainSection8;
