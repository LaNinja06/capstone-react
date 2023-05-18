// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context.jsx"
import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>, 
)
