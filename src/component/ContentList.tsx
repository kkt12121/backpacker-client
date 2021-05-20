import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";

const ContentList = () => {
  let dispatch = useDispatch();
  const list = useSelector((state: RootState) => state);
  //   console.log(list);
  return (
    <div>
      히히
      {/* <button
        onClick={() =>
          dispatch(
            listFind(list.listUpdateReducer.city, list.listUpdateReducer.budget)
          )
        }
      >
        호홓
      </button> */}
    </div>
  );
};

export default ContentList;
