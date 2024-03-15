import React from 'react'
import { useState } from 'react'

const State2 = () => {
    const[day, setDay,]= useState("Thursday")
    const[fun, setFun]= useState("Coding All day")
    const drag = () => {
        setDay("Friday")
        setFun("TGIF All day")

    } 
  return (
    <div>
        <h2>
            Today is {day}, {fun} all day
        </h2>
        <button onClick={drag}>
            drag
        </button>
    </div>
  )
}

export default State2