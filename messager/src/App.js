import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Hello } from "./components/Hello";
import { MessageList } from "./components/MessageList";
import { Formcopy } from "./components/Formcopy";
import { ChatList } from "./components/List";
// import { Form } from "./components/Form";

const text = "Привет!";

const authors = { me: "Me", bot: "Bot" };

function App() {
  const [messageList, setMessageList] = useState([]);

  const messagesEnd = useRef();

  const addMessage = (text) => {
    const newMessage = {
      id: `msg-${Date.now()}`,
      text,
      auhtor: authors.me,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
    let timeOut;
    if (messageList[messageList.length - 1]?.auhtor === authors.me) {
      timeOut = setTimeout(() => {
        const newMessage = {
          text: "I`m a bot",
          auhtor: authors.bot,
        };
        setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
      }, 1500);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [messageList]);

  return (
    <div className="App">
      <div className="flex">
        <ChatList></ChatList>
        <div className="App-content">
          <Hello text={text}></Hello>
          <MessageList messages={messageList}></MessageList>
          <div ref={messagesEnd}></div>
          <Formcopy addMessage={addMessage}> </Formcopy>
        </div>
      </div>
    </div>
  );
}
export default App;
