import { GET_STORE_DATA } from "action/Action";

// getStoreData
let testState = {};

const TestReducer = (state = testState, action: any) => {
  switch (action.type) {
    case GET_STORE_DATA:
      let copy = { ...testState };
      copy = { ...action.payload };
      return copy;

    default:
      return state;
  }
};

export default TestReducer;
