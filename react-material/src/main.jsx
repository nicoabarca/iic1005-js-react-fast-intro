import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles.css"

// Este código se encarga de montar nuestro componente App en <div id="root"></div> que esta en index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
