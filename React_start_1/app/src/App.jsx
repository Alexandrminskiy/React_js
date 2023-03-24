// import { useState } from "react"
import './App.css'

function App() {
	const arr = ['a', 'b', 'c', 'd', 'e'];

  return (
    <>
    <ul>
    {arr.map(function(el, i){
      return <p key={i}><li>{el}</li></p>
    })}
    </ul>
    </>
  )
}

export default App

// https://code.mu/ru/javascript/framework/react/book/prime/basis/objects-array-output/