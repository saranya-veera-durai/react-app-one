import React from 'react'
import { useSelector } from "react-redux";
export default function Navbar() {
    const color=useSelector((state) => state.ColorReducer.color)

  return (
    <div>
            <h1 style={{color:color}}>I am Rajaram</h1>

    </div>
  )
}
