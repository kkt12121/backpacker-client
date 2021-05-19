import React from "react";
import MainPage from "page/MainPage";
import SignUpPage from "page/SignUpPage";
import { useSelector, useDispatch } from "react-redux";
function App() {
  let dispatch = useDispatch();
  const testReducer = useSelector((state) => state);
  return (
    <div className="App">
      {/* <button onClick={() => dispatch(getStoreData())}>
        아ㅏㅏ아아ㅏㅏ아ㅏ아아
      </button> */}
      {/* <MainPage /> */}
      <SignUpPage />
      {console.log(testReducer)}
    </div>
  );
}

export default App;
