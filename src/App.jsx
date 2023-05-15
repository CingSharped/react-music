import { useState } from 'react'
import './styles/App.css'
import ArtistDisplay from './components/artistDisplay'
import UserForm from './components/userForm'

function App() {
  const [username, setUserName] = useState()

  const handleUsername = (newUser) => {
    setUserName(newUser)
  }

  return (
    <>
      <div>
        <h1>{username ? `${username}\'s Music` : 'Music'}</h1>
        {username ? <></> : <UserForm handleUsername={handleUsername} />}
        <ArtistDisplay artist='Linkin Park' />
        
      </div>
    </>
  )
}

export default App
