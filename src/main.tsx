import React from 'react'
import ReactDOM from 'react-dom/client'
import "normalize.css"
import './index.css'
import Menu from './pages/Menu/Menu'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Menu/>
  </React.StrictMode>
)
