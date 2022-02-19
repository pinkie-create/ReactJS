import { List, ListItem } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Form } from "../Form";
import { DeleteButton } from './DeleteButton';
import './style.css';

export const ChatList = ({ chats, deleteChat, addChat }) => (
    <>
        <div className="chatFlex">
            <div> <List>
                {chats.map((chat) => (
                    <ListItem key={chat.id} >
                        <Link className="chatList" to={`/chats/${chat.id}`}>{chat.name}</Link>
                        <DeleteButton id={chat.id} onClick={deleteChat} />
                    </ListItem>
                ))}
            </List>
                <Form addChat={addChat}></Form></div>
            <Outlet />
        </div>
    </>
);