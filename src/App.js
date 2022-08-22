import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Container } from '@material-ui/core'
import Navbar from './components/navbar/Navbar'
import Auth from './pages/auth/Auth'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth='lg'>
        <Routes>
          <Route exact path="/" element={<Auth />} />
        </Routes>
      </Container>
    </React.Fragment>
  )
}

export default App