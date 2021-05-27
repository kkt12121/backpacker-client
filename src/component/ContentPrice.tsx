import { getPrice } from "action/ContentWriteAction";
import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentPrice.scss";
interface Props {
  index: number;
  setplanList: React.Dispatch<React.SetStateAction<Object[][]>>;
  planList: any;
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
  const [priceClick, setpriceClick] = useState(false);
  const handlePrice = () => {
    let copy = [...planList];
    let result = { ...copy[currentDay][index], price: price };
    copy[currentDay][index] = result;
    setplanList(copy);
  };

  const handlePriceClick = () => {
    if (priceClick) {
      setpriceClick(false);
    } else {
      setpriceClick(true);
    }
  };

  useEffect(() => {
    if (planList[currentDay][index].price !== undefined) {
      if (planList[currentDay][index].price === 0) {
        setpriceClick(false);
      } else if (planList[currentDay][index].price === null) {
        setpriceClick(false);
      } else {
        setpriceClick(true);
      }
    } else {
      setpriceClick(false);
    }
  }, [planList]);
  return (
    <>
      <div className="contentPriceBox">
        <div
          className={priceClick ? "priceDiv" : "priceDivOff"}
          onClick={handlePriceClick}
        >
          {"price" in planList[currentDay][index]
            ? planList[currentDay][index].price
            : null}
        </div>
        {priceClick ? null : (
          <>
            <input
              className="contentPriceInput"
              type="textbox"
              placeholder=" 예상 경비 금액 : 10조원"
              onChange={(e) => setprice(Number(e.target.value))}
            />
            <button onClick={handlePrice}>입력</button>
          </>
        )}
      </div>
      {console.log("11111", planList[currentDay][index].price)}
    </>
  );
}
