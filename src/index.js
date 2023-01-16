import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ContextAuthProvider } from './components/ContextApi/ContextAuth'
import { BrowserRouter } from 'react-router-dom'
import { ContextChatProvider } from './components/ContextApi/ContextChat'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ContextAuthProvider>
      <ContextChatProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ContextChatProvider>
    </ContextAuthProvider>
  </BrowserRouter>,
)

reportWebVitals()
