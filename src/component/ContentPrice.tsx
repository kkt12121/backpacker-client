import { getPrice } from "action/ContentWriteAction";
import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";

import "../css/ContentPrice.scss";
import {
  Button,
  CloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { CheckIcon, WarningTwoIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
interface Props {
  index: number;
  setplanList: React.Dispatch<React.SetStateAction<Object[][]>>;
  planList: any;
}

export default function ContentPrice({
  index,
  setplanList,
  planList,
}: Props): ReactElement {
  const dispatch = useDispatch();
  type priceState = null | number;
  const [price, setprice] = useState<priceState>(null);
  const [invalidPrice, setinvalidPrice] = useState(false);
  const state = useSelector((state: RootState) => state.priceReducer);
  const currentDay = useSelector((state: RootState) => state.currentDayReducer);
  const [priceClick, setpriceClick] = useState(false);
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
  return (
    <>
      <div className="contentPriceBox">
        <div
          className={priceClick ? "priceDiv" : "priceDivOff"}
          onClick={handlePriceClick}
        >
          {"price" in planList[currentDay][index]
            ? planList[currentDay][index].price
            : null}{" "}
          원
        </div>
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
                placeholder="예상 경비 금액 : 10조원"
                onChange={(e) => setprice(Number(e.target.value))}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    if (isNaN(price as any)) {
                      setinvalidPrice(true);
                    } else {
                      setinvalidPrice(false);
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
                  setinvalidPrice(true);
                } else {
                  setinvalidPrice(false);
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
      {invalidPrice ? (
        <Alert
          status="error"
          w="700px"
          borderRadius="10px"
          justifyContent="center"
          marginBottom="10px"
        >
          <AlertIcon />
          금액을 올바르게 입력해주세요.
        </Alert>
      ) : null}
    </>
  );
}
