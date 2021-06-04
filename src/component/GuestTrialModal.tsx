import React, { ReactElement } from "react";
import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import "../css/MainSection1.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import {
  loginModalClickAction,
  loginModalClickCloseAction,
} from "action/ModalClickAction";

const ModalBodyText = styled.p`
  font-weight: bold;
`;

const ColorRed = styled.span`
  color: red;
`;

export default function GuestTrialModal(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const loginModalState = useSelector(
    (state: RootState) => state.LoginModalClick
  );
  const dispatch = useDispatch();

  return (
    <>
      <button className="startBtn" onClick={onOpen}>
        NOW START
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Backpacker</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <ModalBodyText>비회원으로 기능을 체험할 수 있습니다.</ModalBodyText>
            <ModalBodyText>
              하지만 <ColorRed>데이터는 저장</ColorRed>되지 않습니다.{" "}
            </ModalBodyText>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              onClick={() => {
                loginModalState
                  ? dispatch(loginModalClickCloseAction())
                  : dispatch(loginModalClickAction());
                onClose();
              }}
            >
              로그인
            </Button>
            <Button variant="ghost" color="red">
              <Link to="contentwrite">체험하기</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
