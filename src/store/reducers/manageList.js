import { ADD_TO_LIST } from "../actions/manageList";
import listItem from "../../models/itemList";

let idNum = 0;

const initialState = {
  items: {}
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      const addedMessage = action.data;
      const addedId = ++idNum;

      let newMessage = new listItem(
        addedId,
        addedMessage
      )

      console.log(newMessage);

      return {
        ...state,
        items: { ...state.items, [addedId]: newMessage }
      }
    default:
      return state
  }
}

export default listReducer;