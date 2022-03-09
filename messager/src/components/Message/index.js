import React from "react";
import PropTypes from "prop-types";
// import "./style.css";

export class Message extends React.Component {
  render() {
    const { text, author } = this.props;
    return (
      <div>
        {author}: {text}
      </div>
    );
  }
}
// export const Message = ({ text, author }) => {
//   return (
//     <div>
//       <span>
//         {author}: {text}
//       </span>
//     </div>
//   );
// };

Message.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number]),
  author: PropTypes.string.isRequired,
};
