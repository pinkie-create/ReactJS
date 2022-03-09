import {
  useState,
  useRef,
  useEffect
} from "react";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import './style.css';


export const Formcopy = ({
  addMessage
}) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addMessage(value);
    setValue("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className="form" onSubmit={onSubmit}>
      <TextField value={value} onChange={onChange} inputRef={inputRef} id="outlined-basic" label="Outlined" variant="outlined" />
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
    </form >
  );
};