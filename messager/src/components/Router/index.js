//import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
//import { addChat, deleteChat } from '../../store/chats/actions';
//import { selectChats } from '../../store/chats/selectors';
import { Articles } from '../Articles/Articles';
import { Chat } from '../Chat';
import { ChatList } from '../ChatList';
import { Home } from '../Home/Home';
import { Profile } from '../Profile';
import { PublicRoute } from '../PublicRoute/PublicRoute';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import './style.css';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { authorization, chatsRef } from '../../services/firebase';
import { onValue, set } from 'firebase/database';
import { chatsIdRef } from '../../services/firebase';


export const Router = () => {
    const Error = () => <h2> Error 404 </h2>;

    const [auth, setAuth] = useState(false);
    const onAuth = () => {
        setAuth(true);
    };
    // const unAuth = () => {
    //     setAuth(false);
    // };

    // const chatList = useSelector(selectChats);
    const [chats, setChats] = useState([]);

    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        set(chatsIdRef(newId), {
            id: newId,
            name: newChatName
        });
    };
    const handleDeleteChat = (idToDelete) => {
        set(chatsIdRef(idToDelete), null);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(authorization, (user) => {
            if (user) {
                setAuth(true);
            } else {
                setAuth(false);
            }
        });
        return unSubscribe;
    }, []);

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snap) => {
            const newChat = [];
            snap.forEach((chat) => {
                newChat.push(chat.val());
            });
            setChats(newChat);
        });
        return unsubscribe;
    }, []);

    return (
        <BrowserRouter >
            <div className='routerLink' >
                <NavLink to="/" className='routerNavlink'>Home</NavLink>
                <NavLink to="/profile" className='routerNavlink' >Profile</NavLink>
                <NavLink to="/chats" className='routerNavlink' >Chats</NavLink>
                <NavLink to="/articles" className='routerNavlink' >Articles</NavLink>
            </div>
            <Routes>
                <Route path="/" element={<PublicRoute auth={auth} />}>
                    <Route path="" element={<Home />} />
                    <Route path="signup" element={<Home isSignUp={onAuth} />} />
                </Route>
                <Route path="profile" element={<PrivateRoute auth={auth} />}>
                    <Route path="" element={<Profile />} />
                </Route>
                <Route path="articles" element={<Articles />} />
                <Route path="chats" element={<ChatList deleteChat={handleDeleteChat} addChat={handleAddChat} chats={chats} />}>
                    <Route path=":chatId" element={<Chat />} /></Route>
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};