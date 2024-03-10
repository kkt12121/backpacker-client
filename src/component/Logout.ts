import axios from "axios";
import "dotenv/config";

const logout = () => {
  let token = localStorage.getItem("token");
  axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/mypage/logout`,
      {},
      {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${token}`,
        },
        withCredentials: true,
      }
    )
    .then(() => {
      localStorage.clear();
      window.location.assign(`${process.env.REACT_APP_CLIENT_URL}`);
    });
};

export default logout;
