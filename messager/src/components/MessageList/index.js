import { Message } from '../Message';
import "./style.css";

export const MessageList = ({ messages }) => {
  return messages.map((message) => (
    <div key={message.id}>
      <Message text={message.text} author={message.athuor}></Message>
    </div>
  ));
};
