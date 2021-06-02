import React, { ReactElement } from "react";
import "../css/ContentPageInvite.scss";
import { useHistory, useParams } from "react-router-dom";
import Login from "./Login";
import { useEffect, useState } from "react";
import axios from "axios";
interface Props {}

function ContentPageInvite({}: Props): ReactElement {
  const history = useHistory();
  let token = localStorage.getItem("token");
  const [contentUserData, setContentUserData] = useState<any>(null);
  let params = useParams();
  const test = () => {
    for (const [key, value] of Object.entries(params)) {
      console.log(`${key}: ${value}`);
    }
  };
  test();
  const { id } = useParams<{ id?: string }>();
  useEffect(() => {
    console.log("axios 시작");
    const fetchData = async () => {
      await axios
        .get(`https://localhost:4000/content/${id}`, {
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${token}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setContentUserData(res.data.userInfo);
        });
    };
    fetchData();
  }, []);

  const handleSendBtn = () => {
    console.log("서버로 넘어가는 토큰" + token);
    console.log(`${id}`);
    axios.put(
      `https://localhost:4000/content/${id}/invite`,
      {}, //request.body를 넣어야한다.
      {
        headers: {
          authorization: `bearer ${token}`,
          "content-type": "application/json",
        },
        withCredentials: true,
      }
    );
    // fetch(`https://localhost:4000/content/invite/${id}`, {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `bearer ${token}`,
    //   },
    //   body: JSON.stringify({}),
    // })
    //  .then((res) => console.log("완료"))
    //  .catch((err) => console.log(err));
    // server.defaults.headers.common["Authorization"] = `bearer ${token}`;
    // server.defaults.headers.post["Content-Type"] = "application/json";
    history.push(`/content/${id}`);
  };

  return (
    <>
      <div className="invitePageModal">
        <div className="invitePageHeader">
          {contentUserData?.map((el: any) => el.nickname + "님 ")}께서 게시물에
          초대하셨습니다
        </div>
        <div className="sectionButton">
          <button
            className="btnOk"
            onClick={() => (token ? handleSendBtn() : history.push("/login"))}
          >
            Ok
          </button>
          <button
            className="btnCancel"
            onClick={() => {
              history.push("/");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
export default ContentPageInvite;
