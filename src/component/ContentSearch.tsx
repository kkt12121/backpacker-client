import axios, { AxiosResponse } from "axios";
import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";

import "../css/ContentSearch.scss";

interface Props {
  planList: Object[][];
  setplanList: React.Dispatch<React.SetStateAction<Object[][]>>;
}

type placeState = null | string;
interface item {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export default function ContentSearch({
  planList,
  setplanList,
}: Props): ReactElement {
  const [autoList, setAutoList] = useState<AxiosResponse>();
  const [place, setplace] = useState<placeState>(null);
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);
  const dispatch = useDispatch();

  const autoComplete = async (keyword: string) => {
    axios.defaults.headers.common["Authorization"] =
      "KakaoAK " + "a7b9cde0b8d1072c338d74a87c1063e4";
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";

    await axios
      .get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`
      )
      .then((res) => {
        setAutoList(res.data.documents);
        console.log(res.data);
      });
  };

  const handleaddPlan = async (item: item) => {
    let copyPlan: Object[][] = [...planList];
    // 첫번째에 쓰레기 데이터로 있던 빈 객체 버리기
    let image;
    switch (item.category_group_code) {
      case "MT1":
        image = "/image/cart.png";
        break;
      case "CS2":
        image = "/image/convenience-store.png";
        break;
      case "PS3":
        image = "/image/kindergarden-children-and-teacher.png";
        break;
      case "SC4":
        image = "/image/school.png";
        break;
      case "AC5":
        image = "/image/education.png";
        break;
      case "PK6":
        image = "/image/parking.png";
        break;
      case "OL7":
        image = "/image/gas.png";
        break;
      case "SW8":
        image = "/image/seoul-metro-logo.png";
        break;
      case "BK9":
        image = "/image/bank.png";
        break;
      case "CT1":
        image = "/image/happy-children.png";
        break;
      case "AG2":
        image = "/image/broker.png";
        break;
      case "PO3":
        image = "/image/building.png";
        break;
      case "AT4":
        image = "/image/ming-dynasty-tombs.png";
        break;
      case "AD5":
        image = "/image/hotel.png";
        break;
      case "FD6":
        image = "/image/restaurant.png";
        break;
      case "CE7":
        image = "/image/coffee-cup.png";
        break;
      case "HP8":
        image = "/image/pharmacy.png";
        break;
      case "PM9":
        image = "/image/medicine.png";
        break;
    }
    if (copyPlan[0].length >= 1) {
      if (Object.keys(copyPlan[0][0]).length === 0) {
        copyPlan[0].shift();
      }
    }
    // copyPlan에 item 정보 추가
    if (copyPlan[currentDay] === undefined) {
      copyPlan[currentDay] = [
        {
          contentid: item.id,
          category: item.category_group_code,
          detail: item.place_url,
          title: item.place_name,
          mapx: item.x,
          mapy: item.y,
          address: item.address_name,
          tel: item.phone,
          image: image,
        },
      ];
    } else {
      copyPlan[currentDay].push({
        contentid: item.id,
        category: item.category_group_code,
        detail: item.place_url,
        title: item.place_name,
        mapx: item.x,
        mapy: item.y,
        address: item.address_name,
        tel: item.phone,
        image: image,
      });
    }
    setplanList(copyPlan);
  };
  return (
    <div className="contentSearchBox">
      <input
        className="contentSearchInput"
        onChange={(e) => {
          autoComplete(e.target.value);
        }}
      />
      {Array.isArray(autoList) ? (
        <ul className="autoList">
          {autoList.map((item) => {
            return (
              <li
                key={item.id}
                className="autoItem"
                onClick={() => handleaddPlan(item)}
              >
                <div className="autoItemPlaceName">{item.place_name}</div>
                <div className="autoItemAddress">{item.address_name}</div>
              </li>
            );
          })}
        </ul>
      ) : null}
      <button
        className="contentSearchButton"
        onClick={() => {
          return Array.isArray(autoList) ? handleaddPlan(autoList[0]) : null;
        }}
      >
        Search
      </button>
      {console.log("계획", planList)}
    </div>
  );
}
