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
  <ContextAuthProvider>
    <ContextChatProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ContextChatProvider>
  </ContextAuthProvider>,
)

reportWebVitals()
