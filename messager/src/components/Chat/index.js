import React, { useState, useEffect, useRef } from "react";
import { Hello } from "../Hello";
import { MessageList } from "../MessageList";
import { Formcopy } from "../Formcopy";
import './style.css';
import { Navigate, useParams } from "react-router-dom";

const text = "Привет!";

const authors = {
    me: "Me",
    bot: "Bot"
};

const chats = [{ id: '1' }];
const messages = { 1: [] };

export function Chat() {
    const { chatId } = useParams();
    const [messageList, setMessageList] = useState({
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
    });

    const messagesEnd = useRef();

    const addMessage = (text) => {
        const newMessage = {
            id: `msg-${Date.now()}`,
            text,
            author: authors.me,
        };
        setMessageList((prevMessageList) => ({
            ...prevMessageList, [chatId]: [...prevMessageList[chatId], newMessage],
        }));
    };

    useEffect(() => {
        messagesEnd.current?.scrollIntoView();
        let timeOut;
        if (messageList[chatId]?.[messageList[chatId].length - 1]?.author === authors.me) {
            timeOut = setTimeout(() => {
                const newMessage = {
                    text: "I`m a bot",
                    author: authors.bot,
                    id: `msg-${Date.now()}`
                };
                setMessageList((prevMessageList) => ({
                    ...prevMessageList, [chatId]: [...prevMessageList[chatId], newMessage],
                }));
            }, 1500);
        }
        return () => {
            clearTimeout(timeOut);
        };
    }, [messageList]);

    if (!messageList[chatId]) {
        return <Navigate to="/chats" replace />;
    }

    return (
        <div className="flex" >
            <Hello text={text} />
            <MessageList messages={messageList[chatId]} />
            <div ref={messagesEnd}></div>
            <Formcopy addMessage={addMessage} />
        </div>);
}