import React from 'react'

import { ArtistDisplay, LoginForm, UserForm } from '../../components'

const Home = () => {
  return (
    <>
      <LoginForm />
      <UserForm />
      <ArtistDisplay />
    </>
  )
}

export default Home