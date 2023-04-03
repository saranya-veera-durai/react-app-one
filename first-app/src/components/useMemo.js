import React, { useCallback, useState } from 'react'
import Product from './Product'
export default function UseMemo() {
    const products =["product1","product2","product3",]
    const [count,setCount]=useState(0)
    const [cart,setCart]=useState(0)
    const addToCart=useCallback(()=>{
        setCart(cart+1)
    },[cart])
  return (
    <div>
        <h1>COUNT:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>increment</button>

        <h1>CART:{cart}</h1>
        {products.map((product)=>{
            return(
                <Product property={product} cart={addToCart}/>
            )
        })}
    </div>
  )
}
