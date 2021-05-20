import { useState } from "react";
import "../css/RangeSliderContent.scss";
function RangeSliderContent() {
  const [range, setRange] = useState(1000000);

  const getRangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newRange: number = range;
    newRange = Number(e.target.value);
    setRange(newRange);
  };

  return (
    <div className="rangeSlider">
      <input
        type="range"
        min="0"
        max="1000000"
        step="10000"
        defaultValue="1000000"
        onChange={getRangeHandler}
        className="slideInput"
      ></input>
      0원 ~ {new Intl.NumberFormat().format(range)}원
    </div>
  );
}

export default RangeSliderContent;
