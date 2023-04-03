import React, { useState,useEffect } from 'react'
import Img1 from './flower.jpg'
import Img2 from './logo192.png'
export default function UseEffect() {
    // const [leap,setLeap]=useState(2004)
    const [img,setImg]=useState(<img src={Img1}/>)

    // const changeLeapYear=()=>{
    //     setLeap(leap+4)
    // }
    // useEffect(()=>{
    //     setLeap(leap+4)
    // },[])

    useEffect(()=>{
        setTimeout(()=>{
            setImg(<img src={Img2}/>)
        },3000)
    })

  return (
    <div>
        {/* <h1>{leap}</h1>
        <button onClick={changeLeapYear}>change to next leap year</button> */}
    <div>{img}</div>
    </div>
  )
}
// comes once the page was refereshed . (datas need to be availables when page was loaded)

// use effect will keep on running , we can give how many times i can execute

// it can be mainly used for api call