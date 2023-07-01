import React from 'react'
import './styles.css'

const LoginForm = () => {
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
    setUsernameInput(usernameInput)
  }
  const handlePassword = (e) => {
    e.preventDefault()
    setPasswordInput(passwordInput)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <h2>Login</h2>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Username"
        aria-label="Username textbox"
        value={usernameInput}
        onChange={handleUsername}
        ref={inputRef}
      />

      <label htmlFor="password">Username</label>
      <input
        type="text"
        placeholder="Sup3rco0lp@assword"
        aria-label="Password textbox"
        value={passwordInput}
        onChange={handlePassword}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm
