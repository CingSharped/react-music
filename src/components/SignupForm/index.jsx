import React, { useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useUsername } from "../../contexts";
import axios from 'axios'
import './styles.css'

const SignupForm = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const { setUsername } = useUsername()
  const inputRef = useRef();


  // Focus on username textbox
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleUsername = (e) => {
    e.preventDefault()
    setUsernameInput(e.target.value)
  }
  const handlePassword = (e) => {
    e.preventDefault()
    setPasswordInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('https://react-music-api-iwdg.onrender.com/users/signup',
    {username: usernameInput, password: passwordInput})
    console.log(response)
    if (Request.status == 200) {
      
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="signup-container">
        <h2>Signup</h2>

        <label htmlFor="username">Username</label>
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          aria-label="Username textbox"
          value={usernameInput}
          onChange={handleUsername}
          ref={inputRef}
        />

        <label htmlFor="password">Password</label>
        <input
          className="input-field"
          type="password"
          placeholder="Sup3rco0lp@assword"
          aria-label="Password textbox"
          value={passwordInput}
          onChange={handlePassword}
        />
        <button type="submit">Submit</button>
      </form>

      <Link to="/login">Login</Link>
    </>
  );
}

export default SignupForm
