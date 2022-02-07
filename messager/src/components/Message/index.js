import React from "react";
import PropTypes from "prop-types";
// import "./style.css";

export class Message extends React.Component {
  render() {
    const { text, auhtor } = this.props;
    return (
      <div>
        {auhtor}: {text}
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
