import React from 'react'

export default function List() {
    const Persons =[ "saranya","rajaram","mathu"]
    const Objects =[
        {id:"1",name:"sara"},
        {id:"2",name:"saranya"},
        {id:"3",name:"saran"}
    ]

  return (
    <div>
        {Persons.map((person)=>{
            return(
                <h1>{person}</h1>
            )
        })}
        {Objects.map((object)=>{
            return(
                <p>{object.name}</p>
            )
        })}
    </div>

  )
}
