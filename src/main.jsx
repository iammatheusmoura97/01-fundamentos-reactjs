import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
        title="Hello, React!"
        body="This is a simple React app."
    />
  </React.StrictMode>
)
