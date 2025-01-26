import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15);

  
  const addvalue = ()=>{
    console.log("Value added",Math.random());
    
    
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);

  }

  const removevalue = ()=>{

    if(counter>0)
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <br></br>

      <button onClick={addvalue}>Add value{counter}</button>
      <button onClick={removevalue}>Remove Value{counter}</button>
    </>
  )
}

export default App
