import React from 'react'

export default function SpreadOperator() {
    const obj ={
        name:"sara",
        age:23,
        dept:"cse"
    }
    const spread = {...obj,name:"raja"}
    console.log(spread)
  return (
    <div></div>
  )
}

// specifically change the value in the particular key .other than that everything will remains same.