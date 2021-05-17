import { getStoreData } from "action/Action";
import MainPage from "page/MainPage";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RootReducer from "reducer";

function App() {
  let dispatch = useDispatch();
  const testReducer = useSelector((state) => state);
  return (
    <div className="App">
      {/* <button onClick={() => dispatch(getStoreData())}>
        아ㅏㅏ아아ㅏㅏ아ㅏ아아
      </button> */}
      <MainPage />
      {console.log(testReducer)}
    </div>
  );
}

export default App;
