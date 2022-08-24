import axios from 'axios'

// specify base api endpoint
const apiBaseUrl = process.env.REACT_APP_BASE_URL

// api urls
const registerUserUrl = `${apiBaseUrl}/auth/register`
const loginExistingUserUrl = `${apiBaseUrl}/auth/login`

// register user
export const registerNewUser = (userData) => axios.post(registerUserUrl, userData)
// login existing user
export const loginExistingUser = (userData) => axios.post(loginExistingUserUrl, userData)