import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  config => {
    // You can add auth tokens here
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// Response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    // Handle common errors
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          break
        case 403:
          // Handle forbidden
          break
        case 404:
          // Handle not found
          break
        default:
          // Handle other errors
          break
      }
    }
    return Promise.reject(error)
  },
)

export default api
