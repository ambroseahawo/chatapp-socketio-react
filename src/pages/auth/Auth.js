import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles'
import Input from "../../components/input/Input"

const Auth = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)

  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const [loginError, setLoginError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setUsernameError(false)
    setPasswordError(false)
    setLoginError(false)
		console.log({ email: email, username: username, password: password, confirmPassword: confirmPassword })
  }
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
    setUsername('')
    setPassword('')
    setConfirmPassword('')
    setUsernameError(false)
    setPasswordError(false)
    setLoginError(false)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? "Sign Up" : "Sign In"}</Typography>
        {loginError && (
          <Typography variant='body2' color="error">{!isSignup && errorMessage}</Typography>
        )}
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && <Input name="email" label="Email" onChange={(e) => setEmail(e.target.value)} type="email" value={email} />}
            <Input name="username" label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            {usernameError ? <span style={{ color: 'red' }}>{errorMessage}</span> : null}
            <Input name="password" label="Password" onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} value={password} handleShowPassword={handleShowPassword} />
            {passwordError ? <span style={{ color: 'red' }}>{errorMessage}</span> : null}
            {isSignup && <Input name="confirmPassword" label="Repeat Password" onChange={(e) => setConfirmPassword(e.target.value)} type="password" value={confirmPassword} />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth