import { getPrice } from "action/ContentWriteAction";
import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentPrice.scss";
interface Props {
  index: number;
  setplanList: React.Dispatch<React.SetStateAction<Object[][]>>;
  planList: Object[][];
}

export default function ContentPrice({
  index,
  setplanList,
  planList,
}: Props): ReactElement {
  const dispatch = useDispatch();
  type priceState = null | number;
  const [price, setprice] = useState<priceState>(null);
  const state = useSelector((state: RootState) => state.priceReducer);
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);

  const handlePrice = () => {
    let copy = [...planList];
    let result = { ...copy[currentDay][index], price: price };
    copy[currentDay][index] = result;
    setplanList(copy);
  };
  return (
    <>
      <div className="contentPriceBox">
        <input
          className="contentPriceInput"
          type="textbox"
          placeholder=" 예상 경비 금액 : 10조원"
          onChange={(e) => setprice(Number(e.target.value))}
        />
        <button onClick={handlePrice}>입력</button>
      </div>
    </>
  );
}
