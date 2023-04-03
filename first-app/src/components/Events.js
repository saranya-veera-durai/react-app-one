import React from 'react'

export default function Events() {
const handleClick=()=>{
        console.log("clicked")
    }
  return (
    <div>
        <button onClick={handleClick}>click me</button>
        <input type="text" onChange={handleClick}/>
    </div>
  )
}
