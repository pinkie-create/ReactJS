import { List, ListItem } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import './style.css';

const chats = [
    {
        name: "Chat 1",
        id: "1",
    },
    {
        name: "Chat 2",
        id: "2",
    },
    {
        name: "Chat 3",
        id: "3",
    },
    {
        name: "Chat 4",
        id: "4",
    },
    {
        name: "Chat 5",
        id: "5",
    },
];

export const ChatList = () => (
    <>
        <div className="chatFlex">
            <List> {chats.map((chat) => (
                <ListItem key={chat.id}>
                    <Link className="chatList" to={`/chats/${chat.id}`}>{chat.name}</Link>
                </ListItem>
            ))}
            </List>
            <Outlet /></div>
    </>
);