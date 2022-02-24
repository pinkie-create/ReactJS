import React, { useEffect, useRef } from "react";
import { Hello } from "../Hello";
import { MessageList } from "../MessageList";
import { Formcopy } from "../Formcopy";
import './style.css';
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessageWithThunk } from "../../store/messages/actions";
import { selectMessages } from "../../store/messages/selectors";

const text = "Привет!";

export function Chat() {
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch;
    const { chatId } = useParams();

    const messagesEnd = useRef();

    const addMessage = (text) => {
        const newMessage = {
            id: `msg-${Date.now()}`,
            text,
            author: "Me",
        };
        dispatch(addMessageWithThunk(chatId, newMessage));
    };

    useEffect(() => {
        messagesEnd.current?.scrollIntoView();
    }, [messages]);

    if (!messages[chatId]) {
        return <Navigate to="/chats" replace />;
    }

    return (
        <div className="flex" >
            <Hello text={text} />
            <MessageList messages={messages[chatId]} />
            <div ref={messagesEnd}></div>
            <Formcopy addMessage={addMessage} />
        </div>);
}