import { getPrice } from "action/ContentWriteAction";
import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentPrice.scss";
interface Props {}

export default function ContentPrice({}: Props): ReactElement {
  const dispatch = useDispatch();
  type priceState = null | number;
  const [price, setprice] = useState<priceState>(null);
  const state = useSelector((state: RootState) => state.priceReducer);
  return (
    <>
      <div className="contentPriceBox">
        <input
          className="contentPriceInput"
          type="textbox"
          placeholder=" 예상 경비 금액 : 10조원"
          onChange={(e) => setprice(Number(e.target.value))}
        />
        <button
          onClick={() => {
            return price !== null ? dispatch(getPrice(price)) : null;
          }}
        >
          입력
        </button>
      </div>
    </>
  );
}
