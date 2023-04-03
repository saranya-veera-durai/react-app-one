import React,{ useState} from 'react'

export default function Usestate(props) {
    const [leap,setLeap]=useState(props.year)
    const changeLeapYear=()=>{
        setLeap(leap+props.num)
    }
  return (
    <div>
        <h1>{leap}</h1>
        <button onClick={changeLeapYear}>change to next leap year</button>
    </div>
  )
}

// props is used to pass datas from.main location to respected file . useState is used to operate a function when button clicked
