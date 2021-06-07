import { GET_MODAL_CONTENT } from "action/ModalContentAction";
export let contentState: {
  items?: [
    {
      mapx: number;
      mapy: number;
    }
  ];
} = {};

interface contentAct {
  type: string;
  payload?: [
    {
      mapx: number;
      mapy: number;
    }
  ];
}

const ModalContentReducer = (state = contentState, action: contentAct) => {
  switch (action.type) {
    case GET_MODAL_CONTENT:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
export default ModalContentReducer;
