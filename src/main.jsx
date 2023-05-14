import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Router } from './routes/routes.jsx'
import ScrollToTop from './utils/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <RouterProvider router={Router} >

      <ScrollToTop />


    </RouterProvider>


  </React.StrictMode>,
)
