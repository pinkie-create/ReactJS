import React from "react";
import "./style.css";

export class MessageList extends React.Component {
  render() {
    const { text, auhtor } = this.props;
    return (
      <div>
        {auhtor}: {text}
      </div>
    );
  }
}
