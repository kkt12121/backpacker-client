import { listBudgetFind } from "action/ListFindAction";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../css/RangeSliderContent.scss";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
function RangeSliderContent() {
  const [range, setRange] = React.useState(1000000);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(listBudgetFind(range));
  }, [range]);

  // const getRangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let newRange: number = range;
  //   newRange = Number(e.target.value);
  //   setRange(newRange);
  // };

  const getRangeHandler = (value: any) => setRange(value);
  return (
    <Flex justifyContent="center" paddingTop="20px" paddingRight="40px">
      <label className="maxBudget">최대 예산</label>
      <NumberInput
        maxW="135px"
        step={50000}
        mr="2rem"
        value={new Intl.NumberFormat().format(range) + "원"}
        onChange={getRangeHandler}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        maxW="300px"
        max={1000000}
        step={50000}
        flex="1"
        focusThumbOnChange={false}
        value={range}
        onChange={getRangeHandler}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxShadow="dark-lg" boxSize="25px" />
      </Slider>
    </Flex>
  );

  return (
    <div className="rangeSlider">
      <input
        type="range"
        min="0"
        max="1000000"
        step="50000"
        defaultValue="1000000"
        onChange={getRangeHandler}
        className="slideInput"
      ></input>
      0원 ~ {new Intl.NumberFormat().format(range)}원 여행정보
    </div>
  );
}

export default RangeSliderContent;
