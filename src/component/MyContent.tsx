import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";
import "dotenv/config";

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
      .get(`${process.env.REACT_APP_SERVER_URL}/mypage/userContent`, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        setMyList(res.data.findContent);
      });
  }, []);
  return (
    <section className="myContentSection">
      <h2 className="nameOfSection">My Content</h2>
      <Table width="max-content" variant="simple" marginTop="50px">
        {/* <TableCaption>{빈 공 간}</TableCaption> */}
        <Thead>
          <Tr>
            <Th>일정 및 장소</Th>
            <Th>일정 제목</Th>
            <Th>예산</Th>
          </Tr>
        </Thead>
        <Tbody fontSize="13px">
          {page?.map((el: any) => {
            return (
              <Tr key={page.indexOf(el)} className="myContent">
                <Td>
                  {el.schedule.length}일 간의
                  <br /> {el.touristRegion} 여행
                </Td>
                <Td
                  className="myContentTitle"
                  onClick={() => {
                    window.location.assign(
                      `${process.env.REACT_APP_CLIENT_URL}/content/${el._id}`
                    );
                  }}
                >
                  {el.title}
                </Td>
                <Td>{new Intl.NumberFormat().format(el.totalCost)} 원</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {!myList?.length ? null : (
        <ReactPaginate
          pageCount={Math.ceil(Number(myList?.length) / 5)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          onPageChange={click}
          previousLabel="이전"
          nextLabel="다음"
          pageClassName="paginateNum"
          pageLinkClassName="pageIdx"
          containerClassName="paginateContainer"
        ></ReactPaginate>
      )}
    </section>
  );
};

export default MyContent;
