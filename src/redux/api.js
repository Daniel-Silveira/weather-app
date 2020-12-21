import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default instance