import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);