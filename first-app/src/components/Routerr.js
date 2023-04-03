import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
export default function Routerr() {
  return (
    <div>
        <BrowserRouter>

              <Dashboard/>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
              </Routes>
              
        </BrowserRouter>
    </div>
  )
}
