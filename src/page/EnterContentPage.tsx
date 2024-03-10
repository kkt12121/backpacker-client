import EnterContentDayList from "component/EnterContentDayList";
import ContentItemMapModal from "../component/ContentItemMapModal";
import InviteModal from "component/InviteModal";
import "../css/EnterContentPage.scss";
import { FaArrowCircleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "reducer";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { GrCircleInformation } from "react-icons/gr";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useClipboard,
  Flex,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import "dotenv/config";

export default function EnterContentPage() {
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contentData, setContentData] = useState<any>(null);
  const [contentUserData, setContentUserData] = useState<any>(null);
  const [planList, setplanList] = useState<Array<Array<{}>>>([[{}]]);
  const [loginedUser, setLoginedUser] = useState<any>(null);
  let token = localStorage.getItem("token");
  const history = useHistory();
  let params = useParams();
  const toast = useToast();
  const test = () => {
    for (const [key, value] of Object.entries(params)) {
      // console.log(`${key}: ${value}`);
    }
  };
  test();
  const { id } = useParams<{ id?: string }>();
  //invite 기능
  const inviteClickState = useSelector((state: RootState) => state.InviteClick);
  //map 기능
  const contentItemMapClickState = useSelector(
    (state: RootState) => state.ContentItemMapClick
  );
  const [index, setIndex] = useState(0);
  const [itemOrder, setItemOrder] = useState(0);
  const [inputText, setInputText] = useState<any>(null);
  const { hasCopied, onCopy } = useClipboard(inputText);
  const property = {
    imageUrl: "",
    beds: 3,
    baths: 2,
    title: "",
  };
  useEffect(() => {
    //console.log("axios 시작");
    const fetchData = async () => {
      await axios.get(`${process.env.REACT_APP_SERVER_URL}/content/${id}`).then((res) => {
        //console.log(res.data);
        setContentData(res.data.contentInfo);
        setContentUserData(res.data.userInfo);
        setplanList(res.data.itemArr);
      });
    };
    //로그인된 유저 파악하기
    const getUserData = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/mypage/userInfo`, {
          headers: {
            authorization: `bearer ${token}`,
          },
        })
        .then((res) => {
          // console.log("로그인된 유저" + res.data.userFind.nickname);
          setLoginedUser(res.data.userFind);
        });
    };
    fetchData();
    getUserData();
  }, []);

  //게시물 삭제 함수
  const del = async () => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/content/${id}/delete`, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        toast({
          title: "게시물 삭제",
          description: "게시물이 삭제 되었습니다.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        history.push("/listpage");
      });
  };
  return (
    <section className="page">
      <div className="contentPage">
        <section className="contentHeader">
          <Box
            w="400px"
            p="7"
            maxW="full"
            className="contentCardBorder"
            overflow="hidden"
          >
            <Image
              borderRadius="50px"
              src={contentData?.thumbnail[0][0]}
              padding={10}
              width={350}
            />
            <Box>
              <Box
                fontWeight="bold"
                fontSize="xx-large"
                lineHeight="tight"
                isTruncated
              >
                <Text className="contentDataTitle">{contentData?.title}</Text>
              </Box>
              <Box mt={5}>
                <Text className="contentDataContent" fontWeight="bold">
                  여행 지역 : {contentData?.touristRegion}
                </Text>
              </Box>
              <Box mt={5}>
                <Text className="contentDataContent" fontWeight="bold">
                  여행 기간 : {contentData?.startDate} ~{contentData?.endDate}
                </Text>
              </Box>
              <Box mt={5} mb={5}>
                <Text className="contentDataContent" fontWeight="bold">
                  총 여행 경비 :{" "}
                  {new Intl.NumberFormat().format(contentData?.totalCost)}원
                </Text>
              </Box>
              <hr />
              <section className="writeParticipant">
                <div className="writeParticipantTitle">
                  <Text mt={5} fontSize="large" color="gray">
                    작성 참여자 :
                    {contentUserData?.map((el: any) => el.nickname + " / ")}
                  </Text>
                </div>
              </section>
              <div className="contentInvite">
                {contentUserData?.map((el: any) => {
                  return el.email === loginedUser?.email ? (
                    <>
                      <Button
                        colorScheme="pink"
                        variant="solid"
                        className="btnInvite"
                        onClick={onOpen}
                      >
                        INVITE
                      </Button>
                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent mt={200}>
                          <ModalHeader color="pink.500">
                            INVITE
                            <Popover placement="bottom">
                              <PopoverTrigger>
                                <Button mr={3} backgroundColor="white">
                                  <GrCircleInformation />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent mt={180}>
                                <PopoverHeader fontWeight="semibold">
                                  INVITE란?
                                </PopoverHeader>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody
                                  width={325}
                                  color="black"
                                  fontSize="medium"
                                >
                                  내용공유 버튼은 다른 회원분들이 해당
                                  여행일정을 볼 수있게 링크를 보내줍니다.
                                  <br /> 작성공유 버튼은 다른 회원분들도 해당
                                  일정의 작성자가 되어 수정,삭제할 수 있도록
                                  초대하는 링크를 보내줍니다.
                                </PopoverBody>
                              </PopoverContent>
                            </Popover>
                          </ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <div>
                              <div className="sectionButton">
                                <Button
                                  className="read"
                                  colorScheme="pink"
                                  variant="outline"
                                  onClick={() => {
                                    // console.log("read 버튼");
                                    setInputText(
                                      `${process.env.REACT_APP_CLIENT_URL}/content/${id}`
                                    );
                                  }}
                                >
                                  내용 공유
                                </Button>
                                <Button
                                  ml={5}
                                  className="readWrite"
                                  colorScheme="pink"
                                  variant="outline"
                                  onClick={() => {
                                    // console.log("readWrite 버튼");
                                    setInputText(
                                      `${process.env.REACT_APP_CLIENT_URL}/invite/${id}`
                                    );
                                  }}
                                >
                                  작성 공유
                                </Button>
                              </div>
                            </div>
                            <Flex mb={8} mt={4}>
                              <Input
                                value={inputText}
                                isReadOnly
                                placeholder="공유버튼을 눌러 url을 넣어주세요"
                              />
                              <Button
                                colorScheme="pink"
                                onClick={onCopy}
                                ml={2}
                              >
                                {hasCopied ? "Copied" : "Copy"}
                              </Button>
                            </Flex>
                          </ModalBody>
                          {/* <ModalFooter>
                        <Button colorScheme="blue" mr={160} onClick={onClose}>
                          Close
                        </Button>
                      </ModalFooter> */}
                        </ModalContent>
                      </Modal>
                    </>
                  ) : null;
                })}
              </div>
            </Box>
          </Box>
          <Box>
            <section className="buttonList">
              <div>
                <Button mr={3} variant="outline" colorScheme="pink">
                  <Link to="/listpage">목록으로</Link>
                </Button>
              </div>
              {contentUserData?.map((el: any) => {
                return el.email === loginedUser?.email ? (
                  <div>
                    <Button mr={3} variant="outline" colorScheme="pink">
                      <Link to={`/contentwrite/?id=${id}`}>수정</Link>
                    </Button>
                    <Button onClick={del} variant="outline" colorScheme="pink">
                      삭제
                    </Button>
                  </div>
                ) : null;
              })}
            </section>
          </Box>
        </section>

        <section className="contentBody">
          <div>
            <Text fontSize="4xl" color="gray" fontStyle="oblique">
              TourList
            </Text>
            <EnterContentDayList
              setindex={setIndex}
              setitemorder={setItemOrder}
            />
          </div>
        </section>
        <FaArrowCircleUp
          className="enterScrollToTopButton"
          onClick={handleClick}
        ></FaArrowCircleUp>
      </div>
      {contentItemMapClickState ? (
        <ContentItemMapModal index={planList[itemOrder][index]} /> // 00 00 00
      ) : null}
      {inviteClickState ? <InviteModal /> : null}
    </section>
  );
}
