import React, { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducer";

import "../css/ContentPrice.scss";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon, QuestionIcon, WarningTwoIcon } from "@chakra-ui/icons";
import axios from "axios";
import styled from "styled-components";
interface Props {
  index: number;
  setplanList: React.Dispatch<React.SetStateAction<Object[][]>>;
  planList: any;
}

const ColorRed = styled.span`
  color: red;
`;

const ColorGreen = styled.span`
  color: Green;
`;

const ColorBlue = styled.span`
  color: Blue;
`;
export default function ContentPrice({
  index,
  setplanList,
  planList,
}: Props): ReactElement {
  type priceState = null | number;
  const [price, setprice] = useState<priceState>(null);
  const [averageCost, setaverageCost] = useState(0);
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);
  const [priceClick, setpriceClick] = useState(false);
  const toast = useToast();

  const handlePrice = () => {
    let copy = [...planList];
    let result = { ...copy[currentDay][index], price: price };
    copy[currentDay][index] = result;
    setplanList(copy);
  };

  const handlePriceClick = () => {
    if (priceClick) {
      setpriceClick(false);
    } else {
      setpriceClick(true);
    }
  };

  useEffect(() => {
    if (planList[currentDay][index].price !== undefined) {
      if (planList[currentDay][index].price === 0) {
        setpriceClick(false);
      } else if (planList[currentDay][index].price === null) {
        setpriceClick(false);
      } else {
        setpriceClick(true);
      }
    } else {
      setpriceClick(false);
    }
  }, [planList]);

  useEffect(() => {
    if (planList[currentDay][index].place !== undefined) {
      axios
        .post("https://localhost:4000/content/itemAc", {
          place: planList[currentDay][index].place,
        })
        .then((res) => setaverageCost(res.data.averageCost));
    }
  }, [planList]);
  return (
    <>
      <div className="contentPriceBox">
        <div
          className={priceClick ? "priceDiv" : "priceDivOff"}
          onClick={handlePriceClick}
        >
          {"price" in planList[currentDay][index]
            ? new Intl.NumberFormat().format(planList[currentDay][index].price)
            : null}{" "}
          원
        </div>
        {priceClick ? (
          <Popover>
            <PopoverTrigger>
              <IconButton
                variant="ghost"
                colorScheme="black"
                aria-label="costInfo"
                fontSize="20px"
                icon={<QuestionIcon />}
                onClick={() => {}}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody textAlign="center">
                {averageCost > planList[currentDay][index].price ? (
                  <>
                    <ColorBlue>{planList[currentDay][index].place}</ColorBlue>에
                    대한 <br /> 평균 경비 금액보다 <br />
                    {new Intl.NumberFormat().format(
                      averageCost - planList[currentDay][index].price
                    )}
                    원이 <ColorGreen>적습니다! 😎</ColorGreen>
                  </>
                ) : averageCost === 0 ? (
                  <>
                    <ColorBlue>{planList[currentDay][index].place}</ColorBlue>에
                    대한 <br />
                    평균 경비 금액이
                    <br />
                    아직 없습니다! 😂
                  </>
                ) : (
                  <>
                    <ColorBlue>{planList[currentDay][index].place}</ColorBlue>에
                    대한 <br />
                    평균 경비 금액보다 <br />
                    {new Intl.NumberFormat().format(
                      planList[currentDay][index].price - averageCost
                    )}
                    원이 <ColorRed>많습니다! 😭</ColorRed>
                  </>
                )}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : null}

        {priceClick ? null : (
          <>
            {/* <input
              className="contentPriceInput"
              type="textbox"
              placeholder=" 예상 경비 금액 : 10조원"
              onChange={(e) => setprice(Number(e.target.value))}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handlePrice();
                }
              }}
            /> */}
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="￦"
              />
              <Input
                isInvalid={isNaN(price as any) ? true : false}
                focusBorderColor={isNaN(price as any) ? "crimson" : "blue.500"}
                variant="flushed"
                textAlign="center"
                placeholder={
                  averageCost === 0
                    ? `다른 이용자들이 아직 이곳을 방문하지 않았습니다!`
                    : `총 예상 경비 금액 : ${new Intl.NumberFormat().format(
                        averageCost
                      )} 원`
                }
                onChange={(e) => setprice(Number(e.target.value))}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    if (isNaN(price as any)) {
                      toast({
                        title: "저장 실패",
                        description: "금액을 정확하게 숫자만 입력해주세요!",
                        position: "top-right",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                      });
                    } else {
                      handlePrice();
                    }
                  }
                }}
              />
              {isNaN(price as any) ? (
                <InputRightElement
                  children={<WarningTwoIcon color="red.500" />}
                />
              ) : (
                <InputRightElement children={<CheckIcon color="green.500" />} />
              )}
            </InputGroup>

            <Button
              colorScheme="facebook"
              size="md"
              variant="ghost"
              onClick={() => {
                if (isNaN(price as any)) {
                  toast({
                    title: "저장 실패",
                    description: "금액을 정확하게 입력해주세요!",
                    position: "top-right",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                } else {
                  handlePrice();
                }
              }}
            >
              OK
            </Button>
          </>
        )}
      </div>
      {console.log("11111", planList[currentDay][index].price)}
    </>
  );
}
