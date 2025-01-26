import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card';

function App() {

  let myobj={
    name:"Akash",
    age:22
  }

  let newArr = [1,2,3];

  return (
    <>
      <h1 className='bg-red-500' >Tailwind test</h1>
      <Card channel="Chai aur code" name="Akash" obj={myobj} arr={newArr}/>
      
      

      
      
    </>
  )
}

export default App
