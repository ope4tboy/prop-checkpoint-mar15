import React from 'react'
import { useState } from 'react'

const State2 = () => {
    const[name, setName,]= useState("teeboy")
    const[job, setJob]= useState("software dev")
    const[actbal, setActbal]= useState("50000000")
    const coronation=() =>{
        setName("cheif teeboy")
        setJob("King")
        setActbal("100trillion")

    } 
  return (
    <div>
        <h2>
            My name is {name}, i am a {job}, my actbal is {actbal}
        </h2>
        <button onClick={coronation}>
            coronation
        </button>
    </div>
  )
}

export default State2