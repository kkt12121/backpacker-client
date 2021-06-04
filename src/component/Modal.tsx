import { ReactElement } from "react";
import "../css/Modal.scss";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
interface Props {}

export default function Modal({}: Props): ReactElement {
  const loginModalState = useSelector(
    (state: RootState) => state.LoginModalClick
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className={loginModalState ? "ModalOn" : "Modal"}>
        <IoClose
          size={40}
          className="ModalClose"
          onClick={() => {
            //dispatch(//모달 액션 쓰기);
          }}
        />
      </div>
    </>
  );
}
