import React from 'react'

 
export default function App() {
    const UpdatedHello=AddStyle(Hello)

  return (
    <div>
        <Hello/>
        <br/>
        <UpdatedHello/>
    </div>
  )
}
const AddStyle = OriginalComponent => {
    function NewComponent () {
        return(
            <div style={{border:"2px solid gray",
            background:"pink"}}>
             <OriginalComponent/>
            </div>
        )
    }
    return NewComponent
}
function Hello() {
    return (
        <h1 style={{color:'red'}}>Hello</h1>
    )
}


// export default function App() {
//     const Comedian=Humur(NormalMan)
//   return (
//     <div>
//         <NormalMan/>
//         <hr/>
//         <Comedian/>
//     </div>
//   )
// }
// const Humur = OriginalComponent => {
//     function NewComponent () {
//         return(
//             <div>
//                 <OriginalComponent/> Humur is added so, Now I am called a comedian.
//             </div>
//         )
//     }
//     return NewComponent
// }
// function NormalMan() {
//     return (
//         <h1>I am a NormalMan</h1>
//     )
// }

