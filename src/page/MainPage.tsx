import Carousel from "component/Carousel";
import MainSection3 from "component/MainSection3";
import MainSection4 from "component/MainSection4";
import MainSection5 from "component/MainSection5";

import React, { ReactElement } from "react";

interface Props {}

export default function MainPage({}: Props): ReactElement {
  return (
    <div>
      <Carousel />
    </div>
  );
}
