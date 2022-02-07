import {
  useState, useRef, useEffect
} from "react";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";


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
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className="form"
      onSubmit={
        onSubmit
      } >
      <TextField value={
        value
      }
        onChange={
          onChange
        } ref={inputRef}
        id="outlined-basic"
        label="Outlined"
        variant="outlined" />
      <Button variant="contained"
        endIcon={<SendIcon />
        } >Send</Button> </form>
  );
};
