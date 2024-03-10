import axios from "axios";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Button,
} from "@chakra-ui/react";
import "dotenv/config";

function UserDelete() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  let token = localStorage.getItem("token");

  const deleteBtnHandler = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/mypage/userDelete`, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        localStorage.clear();
        window.location.assign(`${process.env.REACT_APP_CLIENT_URL}`);
      });
  };
  return (
    <div className="userDelete">
      <Popover isOpen={isOpen}>
        <PopoverTrigger>
          <Button
            width="360px"
            height="70px"
            borderRadius="10px"
            marginTop="100px"
            colorScheme="blackAlpha"
            onClick={open}
          >
            회원탈퇴
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader fontWeight="bold">회원탈퇴</PopoverHeader>
            <PopoverCloseButton onClick={close} />
            <PopoverBody fontSize="sm">
              탈퇴 시, 계정을 복구할 수 없습니다. <br />
              정말로 탈퇴하시겠습니까?
            </PopoverBody>
            <PopoverFooter d="flex" justifyContent="flex-end">
              <Button
                colorScheme="red"
                marginRight="10px"
                onClick={deleteBtnHandler}
              >
                확인
              </Button>
              <Button variant="outline" onClick={close}>
                취소
              </Button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </div>
  );
}

export default UserDelete;
