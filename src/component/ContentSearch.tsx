import axios, { AxiosResponse } from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import { Input, useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

import "../css/ContentSearch.scss";
import { SearchIcon } from "@chakra-ui/icons";
import { getPlanList } from "action/ContentWriteAction";

interface Props {
  planList: Object[][];
  setplanList: React.Dispatch<React.SetStateAction<Object[][]>>;
}

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
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);
  const dispatch = useDispatch();
  const toast = useToast();

  const imageSearch = async (keyword: string, item: item) => {
    console.log("imageSearch");
    const res = await axios.get(
      `https://dapi.kakao.com/v2/search/image?query=${keyword}`,
      {
        headers: {
          Authorization: "KakaoAK " + "a7b9cde0b8d1072c338d74a87c1063e4",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (res.data.documents.length !== 0) {
      handleaddPlan(item, res.data.documents[0].thumbnail_url);
      // setgetImage(res.data.documents[0].thumbnail_url);
    } else {
      console.log("뭐임", res);
    }
  };

  const textInput = React.useRef<any>();
  const clearInput = () => {
    textInput.current.value = "";
  };
  useEffect(() => {
    dispatch(getPlanList(planList));
  }, [planList]);

  const autoComplete = async (keyword: string) => {
    // axios.defaults.headers.common["Authorization"] =
    //   "KakaoAK " + "a7b9cde0b8d1072c338d74a87c1063e4";
    // axios.defaults.headers.post["Content-Type"] =
    //   "application/x-www-form-urlencoded";

    await axios
      .get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`,
        {
          headers: {
            Authorization: "KakaoAK " + "a7b9cde0b8d1072c338d74a87c1063e4",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        setAutoList(res.data.documents);
        console.log(res.data);
      });
  };

  const handleaddPlan = async (item: item, imageurl: string) => {
    let copyPlan: Object[][] = [...planList];
    // 첫번째에 쓰레기 데이터로 있던 빈 객체 버리기
    if (copyPlan[0].length >= 1) {
      if (copyPlan[0][0] !== undefined) {
        if (Object.keys(copyPlan[0][0]).length === 0) {
          copyPlan[0].shift();
        }
      }
    }
    // copyPlan에 item 정보 추가
    if (copyPlan[currentDay] === undefined) {
      copyPlan[currentDay] = [
        {
          contentId: item.id,
          category: item.category_group_code,
          detail: item.place_url,
          place: item.place_name,
          mapx: item.x,
          mapy: item.y,
          address: item.address_name,
          tel: item.phone,
          img: imageurl,
        },
      ];
    } else {
      copyPlan[currentDay].push({
        contentId: item.id,
        category: item.category_group_code,
        detail: item.place_url,
        place: item.place_name,
        mapx: item.x,
        mapy: item.y,
        address: item.address_name,
        tel: item.phone,
        img: imageurl,
      });
    }
    setplanList(copyPlan);
  };
  return (
    <div className="contentSearchBox">
      <div className="searchAndAuto">
        <Input
          variant="flushed"
          className="contentSearchInput"
          ref={textInput}
          placeholder="예: 경복궁, 가로수길 카페, 신사동 맛집"
          size="lg"
          onChange={(e) => {
            autoComplete(e.target.value);
            // imageSearch(e.target.value);
            e.target.value.length === 0
              ? setAutoList(undefined)
              : console.log("go");
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              if (Array.isArray(autoList)) {
                if (autoList.length === 0) {
                  toast({
                    title: "저장 실패",
                    description: "존재하지 않는 곳입니다!",
                    position: "top-right",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                } else {
                  imageSearch(autoList[0].place_name, autoList[0]);
                  clearInput();
                  setAutoList(undefined);
                }
              }
            }
          }}
        />
        {Array.isArray(autoList) ? (
          <ul className="autoList">
            {autoList.map((item) => {
              return (
                <li
                  key={item.id}
                  className="autoItem"
                  onClick={() => {
                    imageSearch(item.place_name, item);
                    clearInput();
                    setAutoList(undefined);
                  }}
                >
                  <div className="autoItemPlaceName">{item.place_name}</div>
                  <div className="autoItemAddress">{item.address_name}</div>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>

      {console.log("계획", planList)}
      <Button
        leftIcon={<SearchIcon color="#ff1493" />}
        color="#ff1493"
        variant="ghost"
        size="lg"
        className="contentSearchButton"
        onClick={() => {
          if (Array.isArray(autoList)) {
            if (autoList.length === 0) {
              toast({
                title: "저장 실패",
                description: "존재하지 않는 곳입니다!",
                position: "top-right",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            } else {
              imageSearch(autoList[0].place_name, autoList[0]);
              clearInput();
              setAutoList(undefined);
            }
          }
        }}
      >
        Search
      </Button>
    </div>
  );
}
