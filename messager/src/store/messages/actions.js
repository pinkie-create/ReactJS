export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

const authors = {
  me: "Me",
  bot: "Bot"
};


export const addMessage = (chatId, newMsg) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    newMsg
  }
});
export const deleteMessage = (chatId, idToDelete) => ({
  type: DELETE_MESSAGE,
  payload: {
    chatId,
    idToDelete,
  },
});

let timeOut;

export const addMessageWithThunk = (chatId, newMsg) => (dispatch) => {
  dispatch(addMessage(chatId, newMsg));

  if (newMsg.author === authors.me) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      const newMessage = {
        text: "I`m a bot",
        author: authors.bot,
        id: `msg-${Date.now()}`
      };
      dispatch(addMessage(chatId, newMessage));
    }, 1500);
  }
};