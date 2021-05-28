import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const MyContent = () => {
  let token = localStorage.getItem("token");
  const [myList, setMyList] = useState<any>();
  const [lastnum, setLastnum] = useState(5);
  let page = myList?.slice(lastnum - 5, lastnum);

  const click = (data: any) => {
    setLastnum((data.selected + 1) * 5);
  };

  useEffect(() => {
    axios
      .get("https://localhost:4000/mypage/userContent", {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        setMyList(res.data.findContent);
      });
  }, []);
  //   console.log(myList);
  return (
    <div className="myContentList">
      {page?.map((el: any) => {
        return (
          <div
            key={page.indexOf(el)}
            onClick={() => {
              window.location.assign(`http://localhost:3000/content/${el._id}`);
            }}
            className="myContent"
          >
            <div>
              {el.schedule.length}일 간의 {el.touristRegion} 여행
            </div>
            <div>{el.title}</div>
          </div>
        );
      })}
      {!myList?.length ? null : (
        <ReactPaginate
          pageCount={Math.ceil(Number(myList?.length) / 5)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          onPageChange={click}
          pageClassName="paginateNum"
          pageLinkClassName="pageIdx"
          containerClassName="paginateContainer"
        ></ReactPaginate>
      )}
    </div>
  );
};

export default MyContent;
