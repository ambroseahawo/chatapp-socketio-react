import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { loginExistingUser, registerNewUser } from '../../global/actions/auth';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles'
import Input from "../../components/input/Input"

const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)

  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const [authError, setAuthError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  const authState = useSelector((state) => state.authReducer)
  const [cookies, setCookie] = useCookies(["authenticatedUser"])

  useEffect(() => {
    if (authState?.errorResponse) {
      setAuthError(true)
      setErrorMessage(authState.errorResponse.data)
    }else{
      if(!isSignup){
        setCookie("authenticatedUser", authState.authData)
        if(cookies.authenticatedUser?.username){
          navigate("/messages")
        }
      }
    }
  }, [authState, cookies.authenticatedUser?.username, isSignup, navigate, setCookie])

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError(false)
    setPasswordError(false)
    setAuthError(false)

    if (isSignup) {
      // validate username length
      if (isNaN(username)) {
        if (!(username.length >= 3 && username.length <= 10)) {
          setUsernameError(true)
          setErrorMessage("Username should be between 3 to 10 characters")
          return
        }
      } else {
        setUsernameError(true)
        setErrorMessage("Username Should be a string")
        return
      }

      // validate password length
      if (password.length < 8) {
        setPasswordError(true)
        setErrorMessage("Password should be at least 8 characters")
        return
      }

      // validate password match
      if (password !== confirmPassword) {
        setPasswordError(true)
        setErrorMessage("Passwords did not match")
        return
      }
      // console.log({ email: email, username: username, password: password, confirmPassword: confirmPassword })

      const userData = {
        email: email,
        username: username,
        password: password
      }

      dispatch(registerNewUser(userData, setIsSignup, setPassword))
    } else {
      // console.log({ username: username, password: password });
      const userData = {
        username: username,
        password: password
      }

      dispatch(loginExistingUser(userData))
    }


    //To do, enable login with either email or username
    //To do, handle auth data after login
  }
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
    setUsername('')
    setPassword('')
    setConfirmPassword('')
    setUsernameError(false)
    setPasswordError(false)
    setAuthError(false)
    setErrorMessage("")
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? "Sign Up" : "Sign In"}</Typography>
        {authError && (
          <Typography variant='body2' color="error">{errorMessage}</Typography>
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