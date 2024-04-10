import axios from 'axios';

export default axios.create({
  // baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
  // headers: {"ngrok-skip-browser-warning": "true"}

  baseURL: 'http://localhost:8080', // Your proxy server URL
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Allow requests from all origins (replace with specific origin if needed)
  },
})