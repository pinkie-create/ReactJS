import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialState = {};

export const messagesReducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...store,
        [action.payload.chatId]: [
          ...store[action.payload.chatId],
          action.payload.newMsg,]
      };
    }
    case DELETE_MESSAGE: {
      return {
        ...store,
        [action.payload.chatId]: store[action.payload.chatId].filter(
          (message) => message.id !== action.payload.idToDelete
        ),
      };
    }
    default:
      return store;
  }
};