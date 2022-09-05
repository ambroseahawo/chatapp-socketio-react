import axios from 'axios'

// specify base api endpoint
const apiBaseUrl = process.env.REACT_APP_BASE_URL

// api urls
const registerUserUrl = `${apiBaseUrl}/auth/register`
const loginExistingUserUrl = `${apiBaseUrl}/auth/login`
const chatsUrl = `${apiBaseUrl}/chats`
const usersUrl = `${apiBaseUrl}/users`
const currentChatUrl = `${apiBaseUrl}/current`

// register user
export const registerNewUser = (userData) => axios.post(registerUserUrl, userData)
// login existing user
export const loginExistingUser = (userData) => axios.post(loginExistingUserUrl, userData)
//get all existing chats
export const getExistingChats = (userId) => axios.get(`${chatsUrl}/${userId}`)
// get user data
export const getExistingUser = (userId) => axios.get(`${usersUrl}?userId=${userId}`)
// get current chat
export const getCurrentChat = (userId) => axios.get(`${currentChatUrl}/${userId}`)