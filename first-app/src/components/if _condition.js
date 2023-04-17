import React, { useState } from 'react'

export default function IfCondition() {
//     const[inputValue, updateInputValue]=useState(null)
//     const[error,setError]=useState({
//         data:{required:false}

//     })
//    function Name(datas){ if(error.data.required===true) {
//         return(
//         <p style={{color:"red"}}> {datas} </p>)
//       }
//     }

//     function handleName(e){
//         updateInputValue(e.target.value)
//         console.log(e.target.value)

//     }

//         if(updateInputValue==""){
//             setError(error.data.required===true)
//         }
    
//   return (
//     <>
//     <div>
//         <label>Name</label>
//         <input type="text" value={inputValue} onChange={handleName}/>
//         {
//         Name("name is required")
//         }
//         <h1>{inputValue}</h1>
//     </div>
//         <div>
//         <label>Email</label>
//         <input type="text"/>
//         {
//         Name("email is required")
//         }
//     </div>
//         <div>
//         <label>Password</label>
//         <input type="text"/>
//         {
//         Name("password is required")
//         }
//     </div>
//     <button>submit</button>
//     </>

//   )
// const[data,setData]=useState("sara")
// function Change(){
//     if (data=="sara"){
//         setData("raja")
//     }
//     else{
//         setData("sara")
//     }
// }

// return(
//     <>
//     <h1>{data}</h1>
//     <button onClick={Change}>change</button>
//     </>
// )
// }
const[inputValue, updateInputValue]=useState("")
const[data,setData]=useState("")

    function Change(){
        if(inputValue=="sara"){
            setData("raja")
        }
        else if(inputValue=="raja"){
            setData("sara")
        }
        else{
            setData("mathu")
        }
    }
    
    function handleName(e){
        updateInputValue(e.target.value)
        console.log(e.target.value)

    }
return(
    <>
    <input type="text" onChange={handleName}/>
    <h1>{data}</h1>
    <button onClick={Change}>change</button>
    </>
)
}