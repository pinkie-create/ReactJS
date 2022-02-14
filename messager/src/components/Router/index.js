import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Chat } from '../Chat';
import { ChatList } from '../ChatList';
import { Profile } from '../Profile';
import './style.css';

const Home = () => <h2> Home page </h2>;
const Error = () => <h2> Error 404 </h2>;

export const Router = () => {
    return (<BrowserRouter >
        <div className='routerLink' >
            <NavLink to="/" className='routerNavlink'>Home</NavLink>
            <NavLink to="/profile" className='routerNavlink' >Profile</NavLink>
            <NavLink to="/chats" className='routerNavlink' >Chats</NavLink>
        </div>
        <Routes>
            <Route path="/" element={< Home />} />
            <Route path="profile" element={< Profile />} />
            <Route path="chats" element={<ChatList />}>
                <Route path=":chatId" element={< Chat />} /></Route>
            <Route path='*' element={< Error />} />
        </Routes>
    </BrowserRouter>);
};