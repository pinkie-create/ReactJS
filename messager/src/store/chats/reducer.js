import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = [{
  name: "Chat 1",
  id: "1",
},
{
  name: "Chat 2",
  id: "2",
},
{
  name: "Chat 3",
  id: "3",
},
{
  name: "Chat 4",
  id: "4",
},
{
  name: "Chat 5",
  id: "5",
},];

export const chatsReducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return [...store, { chatName: action.payload.chatName, id: action.payload }];
    }
    case DELETE_CHAT: {
      return store.filter(({ id }) => id !== action.payload.id);
    }
    default:
      return store;
  }
};