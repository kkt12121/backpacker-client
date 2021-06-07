import axios from "axios";

const logout = () => {
  let token = localStorage.getItem("token");
  axios
    .post(
      "https://localhost:4000/mypage/logout",
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
      window.location.assign("http://localhost:3000/");
    });
};

export default logout;
