// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'
import { BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
)

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
