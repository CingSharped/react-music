import { useState, useRef, useEffect } from "react";
import "./style.css";
import { useUsername } from "../../contexts";

const UserForm = () => {
  const [inputText, setInputText] = useState("");

  const { username, setUsername } = useUsername();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputText);
  };

  return (
    <>
      {username ? (
        <></>
      ) : (
        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="username">What is your name?</label>
          <input
            id="username"
            type="text"
            value={inputText}
            onChange={handleInput}
            placeholder="Put your name here"
            autoComplete="off"
            ref={inputRef}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default UserForm;
