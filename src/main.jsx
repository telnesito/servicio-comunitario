import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Router } from './routes/routes.jsx'
import { ScrollRestoration } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={Router} >
      <ScrollRestoration />
    </RouterProvider>

  </React.StrictMode>,
)
