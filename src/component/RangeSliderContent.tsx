import { listBudgetFind } from "action/ListFindAction";
import React, { useEffect } from "react";
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
  const [range, setRange] = React.useState(5000000);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(listBudgetFind(range));
  }, [range]);

  const getRangeHandler = (value: any) => setRange(value);
  return (
    <Flex
      justifyContent="center"
      paddingTop="80px"
      paddingRight="40px"
      paddingBottom="40px"
    >
      <label className="maxBudget">최대 예산</label>
      <NumberInput
        maxW="135px"
        step={100000}
        mr="2rem"
        border="pink"
        color="rgb(255, 153, 170)"
        value={new Intl.NumberFormat().format(range) + "원"}
        onChange={getRangeHandler}
      >
        <NumberInputField />
        <NumberInputStepper bgColor="pink">
          <NumberIncrementStepper color="white" />
          <NumberDecrementStepper color="white" />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        maxW="300px"
        max={5000000}
        step={100000}
        flex="1"
        focusThumbOnChange={false}
        value={range}
        onChange={getRangeHandler}
      >
        <SliderTrack>
          <SliderFilledTrack bgColor="pink" />
        </SliderTrack>
        <SliderThumb bgColor="#ff1493" boxShadow="dark-lg" boxSize="25px" />
      </Slider>
    </Flex>
  );
}

export default RangeSliderContent;
