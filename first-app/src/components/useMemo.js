import React, { useState } from 'react'
import Product from './Product'
export default function UseMemo() {
    const products =["product1","product2","product3"]
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>increment</button>

        {products.map((product)=>{
            return(
                <Product property={product}/>
            )
        })}
    </div>
  )
}
