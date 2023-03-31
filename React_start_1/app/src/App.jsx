// import { useState } from "react"
import './App.css'
// import {nanoid} from 'nanoid'
import React, { useState } from 'react';

function App(){
  const [val1, setVal1] = useState()
  // const [val2, setVal2] = useState()
  const [res1, setRes1] = useState()
  // const [res2, setRes2] = useState()
  

function oN(e){
  console.log(e.target.value);
}

  return <>
 
  <input val1={val1} onChange={e => setVal1(e.target.value)}/>
  <button onClick={()=> setRes1(val1)} onChange={oN}>btn</button>
  <p>: {res1}</p>
  </>
}

export default App

// https://code.mu/ru/javascript/framework/react/book/prime/basis/objects-array-output/
// https://code.mu/ru/javascript/framework/react/book/prime/states/handling-form-data/