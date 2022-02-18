import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { addChat, deleteChat } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import { Chat } from '../Chat';
import { ChatList } from '../ChatList';
import { Profile } from '../Profile';
import './style.css';

const Home = () => <h2> Home page </h2>;
const Error = () => <h2> Error 404 </h2>;

export const Router = () => {
    const chatList = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        const newChat = {
            id: newId,
            name: newChatName
        };
        dispatch(addChat(newId, newChatName));
    };
    const handleDeleteChat = (idToDelete) => {
        dispatch(deleteChat(idToDelete));
    };

    return (
        // <Provider>
        <BrowserRouter >
            <div className='routerLink' >
                <NavLink to="/" className='routerNavlink'>Home</NavLink>
                <NavLink to="/profile" className='routerNavlink' >Profile</NavLink>
                <NavLink to="/chats" className='routerNavlink' >Chats</NavLink>
            </div>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="profile" element={< Profile />} />
                <Route path="chats" element={<ChatList deleteChat={handleDeleteChat} addChat={handleAddChat} chats={chatList} />}>
                    <Route path=":chatId" element={< Chat />} /></Route>
                <Route path='*' element={< Error />} />
            </Routes>
        </BrowserRouter>
        // </Provider>
    );
};