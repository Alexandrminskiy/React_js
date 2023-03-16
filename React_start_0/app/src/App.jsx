import { useState } from 'react';

import './App.css'

function App() {
 const[obj, setObj] = useState({
  title:"заголовок",
  time: "20:18"
 });
 const [array, setArray] = useState([1,2,3,4,5]);

 setObj(prev=>{
  return {
    ...prev,
    title: 'Новый'
  }
 })
 setArray(prev=>{
  return {
    ...prev,
    [1]:10
  }
 }) 
}

export default App;