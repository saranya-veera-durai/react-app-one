import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_COLOR,RESET_COLOR } from '../action_types'


export default function Color() {
    const dispatch=useDispatch()
    const color=useSelector((state) => state.ColorReducer.color)
    const CC=()=>{
        dispatch({
            type:CHANGE_COLOR,payload:"blue"
        })
    }
    const RC=()=>{
        dispatch({
            type:RESET_COLOR,payload:"red"
        })
    }

    return (
        <div>
            <h1 style={{color:color}}>I am saranya</h1>
            <button onClick={CC}>Change color</button>
            <button onClick={RC}>Reset color</button>
        </div>
  )
}
