import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTBlNDkyYTk4NzU4OTVkOTIwNzUyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODM2ODIyOCwiZXhwIjoxNjM4NjI3NDI4fQ.a42M38TeP3oe4F5COnv8Kd6E4nFJKpASAdkNLGOv244'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer  ${TOKEN}` }
})
