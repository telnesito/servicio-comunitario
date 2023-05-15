import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ScrollToTop from './utils/ScrollToTop'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
      <ScrollToTop />
    </BrowserRouter>





  </React.StrictMode>,
)
