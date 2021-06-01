import { loginModalClickCloseAction } from "action/ModalClickAction";
import LoginPage from "page/LoginPage";
import React, { ReactElement } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import { Button, CloseButton, useDisclosure } from "@chakra-ui/react";
import "../css/LoginModal.scss";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
interface Props {}

export default function LoginModal({}: Props): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
