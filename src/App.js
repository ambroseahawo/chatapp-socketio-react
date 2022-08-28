import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Container } from '@material-ui/core'
import Navbar from './components/navbar/Navbar'
import Auth from './pages/auth/Auth'
import Messenger from './components/messenger/Messenger'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth='lg'>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/messages" element={<Messenger />} />
        </Routes>
      </Container>
    </React.Fragment>
  )
}

export default App