import React, { useEffect, useRef, useState } from "react";
import { Hello } from "../Hello";
import { MessageList } from "../MessageList";
import { Formcopy } from "../Formcopy";
import './style.css';
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessageWithThunk } from "../../store/messages/actions";
import { selectMessages } from "../../store/messages/selectors";
import { messageIdRef, messagesChatIdRef } from '../../services/firebase';
import { onChildAdded, onChildRemoved, push, set } from "firebase/database";
const text = "Привет!";

export function Chat() {
    //const messages = useSelector(selectMessages);
    const [messages, setMessages] = useState([]);
    //const dispatch = useDispatch;
    const { chatId } = useParams();

    const messagesEnd = useRef();

    const addMessage = (text) => {
        const newMessage = {
            id: `msg-${Date.now()}`,
            text,
            author: "Me",
        };
        set(messageIdRef(chatId, newMessage.id), newMessage);
    };

    useEffect(() => {
        messagesEnd.current?.scrollIntoView();
    }, [messages]);

    useEffect(() => {
        const unsubscrabe = onChildAdded(messagesChatIdRef(chatId), (snap) => {
            setMessages((prevMessages) => [...prevMessages, snap.val()]);
        }
        );
        return unsubscrabe;
    }, []);

    useEffect(() => {
        const unsubscrabe = onChildRemoved(messagesChatIdRef(chatId), (snap) => {
            setMessages((prevMessages) => prevMessages.filter(({ id }) => id !== snap.val()?.id));
        }
        );
        return unsubscrabe;
    }, [chatId]);

    if (!messages) {
        return <Navigate to="/chats" replace />;
    };

    return (
        <div className="flex" >
            <Hello text={text} />
            <MessageList messages={messages} />
            <div ref={messagesEnd}></div>
            <Formcopy addMessage={addMessage} />
        </div>);
}