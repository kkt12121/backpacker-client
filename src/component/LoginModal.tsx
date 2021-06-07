import { loginModalClickCloseAction } from "action/ModalClickAction";
import LoginPage from "page/LoginPage";
import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import { CloseButton } from "@chakra-ui/react";
import "../css/LoginModal.scss";

export default function LoginModal(): ReactElement {
  const dispatch = useDispatch();
  const loginModalState = useSelector(
    (state: RootState) => state.LoginModalClick
  );
  return (
    <>
      <div className={loginModalState ? "loginModalOn" : "loginModal"}>
        <CloseButton
          size="lg"
          className="loginModalClose"
          onClick={() => {
            dispatch(loginModalClickCloseAction());
          }}
        />
        {loginModalState ? <LoginPage /> : null}
      </div>
    </>
  );
}
