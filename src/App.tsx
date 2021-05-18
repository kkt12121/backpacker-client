import { getStoreData } from "action/Action";
import MenuCategory from "component/MenuCategory";
import Modal from "component/Modal";
import Navbar from "component/Navbar";
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
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
