import React, { useState, useEffect } from "react";
import "./App.css";
import { Message } from "./components/Message";
import { MessageList } from "./components/MessageList";
import { Form } from "./components/Form";

const text = "Привет!";

function App() {
  const [messageList, setMessageList] = useState([]);

  const addMessage = (text) => {
    const newMessage = {
      text,
      auhtor: "Me",
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  useEffect(() => {
    let timeOut;
    if (messageList[messageList.length - 1]?.auhtor === "Me") {
      timeOut = setTimeout(() => {
        const newMessage = {
          text: "I`m a bot",
          auhtor: "Bot",
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
      <div className="App-content">
        <Message text={text}> </Message>
        {messageList.map((message) => (
          <MessageList text={message.text} auhtor={message.auhtor} />
        ))}
        <Form addMessage={addMessage}> </Form>
      </div>
    </div>
  );
}
export default App;
