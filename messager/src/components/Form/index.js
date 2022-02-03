import { useState } from "react";
import "./style.css";

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addMessage(value);
    setValue("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="formText"
        type="text"
        value={value}
        onChange={onChange}
      />
      <input className="formButton" type="submit" />
    </form>
  );
};
