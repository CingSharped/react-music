import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { NavBar } from './layout'
import * as Pages from './pages'
import './App.css'
import { UsernameProvider } from "./contexts";
// import ArtistDisplay from './components/artistDisplay'
// import UserForm from './components/userForm'

function App() {
  // const [username, setUserName] = useState()

  // const handleUsername = (newUser) => {
  //   setUserName(newUser)
  // }

  return (
    <>
      <UsernameProvider>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Pages.Home />}/>
            <Route path='/albums' element={<Pages.Albums />}/>

          </Route>
        </Routes>


        {/* <h1>{username ? `${username}\'s Music` : 'Music'}</h1>
        {username ? <></> : <UserForm handleUsername={handleUsername} />}
        <ArtistDisplay artist='Linkin Park' /> */}
        
      </UsernameProvider>
    </>
  )
}

export default App
