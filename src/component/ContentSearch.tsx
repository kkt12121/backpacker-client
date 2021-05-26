import axios from "axios";
import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentSearch.scss";
interface Props {
  planList: Object[][];
  setplanList: React.Dispatch<React.SetStateAction<Object[][]>>;
}

type placeState = null | string;
export default function ContentSearch({
  planList,
  setplanList,
}: Props): ReactElement {
  const [place, setplace] = useState<placeState>(null);
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);
  const dispatch = useDispatch();

  const handleaddPlan = async () => {
    const res = await axios.post("http://localhost:4000/api/search", {
      keyword: place,
      num: 1,
    });

    let copyPlan: Object[][] = [...planList];
    if (copyPlan[0].length >= 1) {
      if (Object.keys(copyPlan[0][0]).length === 0) {
        copyPlan[0].shift();
      }
    }
    if (copyPlan[currentDay] === undefined) {
      copyPlan[currentDay] = [
        {
          contentid: String(res.data.item[0].contentid),
          thumbnail: res.data.item[0].firstimage,
          title: res.data.item[0].title,
          mapx: res.data.item[0].mapx,
          mapy: res.data.item[0].mapy,
          address: res.data.item[0].addr1,
          tel: res.data.item[0].tel,
        },
      ];
    } else {
      copyPlan[currentDay].push({
        contentid: String(res.data.item[0].contentid),
        thumbnail: res.data.item[0].firstimage,
        title: res.data.item[0].title,
        mapx: res.data.item[0].mapx,
        mapy: res.data.item[0].mapy,
        address: res.data.item[0].addr1,
        tel: res.data.item[0].tel,
      });
    }
    setplanList(copyPlan);
  };
  return (
    <div className="contentSearchBox">
      <input
        className="contentSearchInput"
        onChange={(e) => {
          setplace(e.target.value);
        }}
      />
      <button
        className="contentSearchButton"
        // onClick={() => {
        //   return place !== null ? dispatch(getImage(place, 1)) : null;
        // }}
        onClick={handleaddPlan}
      >
        Search
      </button>
      {console.log("계획", planList)}
    </div>
  );
}
