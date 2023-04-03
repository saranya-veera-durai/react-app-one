import React from 'react'

export default function Condition(props) {
  return (
    <div>
        {props.isWinner ? <h1><WinnerName/></h1>: <p><RunnerName/></p>}
    </div>
  )
}

function WinnerName() {
  return (
    <>
    Rajaram
    </>
  )
}
function RunnerName() {
    return (
      <>
      none
      </>
    )
  }