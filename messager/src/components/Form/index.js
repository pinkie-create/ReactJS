import {
  useState,
  useRef,
  useEffect
} from "react";
import "./style.css";

export const Form = ({
  addChat
}) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addChat(value);
    setValue("");
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className="form" onSubmit={onSubmit} >
      <input className="formText" type="text" value={value} ref={inputRef} onChange={onChange} />
      <input className="formButton" type="submit" />
    </form>
  );
};