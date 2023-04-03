import React from 'react'
const Product=React.memo((props)=> {
    console.log(`${props.property} re-rendered`)
  return (
    <div>
        <h1>{props.property}</h1>
    </div>
  )
})
export default Product