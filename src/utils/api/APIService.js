import axios from 'axios'

// specify base api endpoint
const apiBaseUrl = process.env.REACT.APP_BASE_URL

// api urls
const registerUserUrl = `${apiBaseUrl}/auth/register`

// register user
export const registerNewUser = (userData) => axios.post(registerUserUrl, userData)