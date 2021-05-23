import { listBudgetFind } from "action/ListFindAction";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../css/RangeSliderContent.scss";
function RangeSliderContent() {
  const [range, setRange] = useState(1000000);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(listBudgetFind(range));
  }, [range]);

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
        step="50000"
        defaultValue="1000000"
        onChange={getRangeHandler}
        className="slideInput"
      ></input>
      0원 ~ {new Intl.NumberFormat().format(range)}원 여행정보
    </div>
  );
}

export default RangeSliderContent;
