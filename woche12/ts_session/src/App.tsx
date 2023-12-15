import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Button2 from './components/Button2'

function App() {
  /* function convertCurrency(value:number, currency:string){

    // hier wird umgewandelt
    return `${value} ${currency}`
  }
  const newCurrency = convertCurrency(10, "Euro")
  console.log(newCurrency) */

const [count, setCount]=useState(0)

  function handleClick (){
   console.log("hallo click")
    sessionStorage.setItem("click", "hallo")
  }

  return (<>
    <h1>TS Session</h1>
    <Button 
    
      setCount={setCount}
      onClick={handleClick}
      backgroundColor="blue"  
      fontSize="3rem"
      padding={[30, 10,20,20]}
      />

      <Button2>submit</Button2>
  </>
  )
}

export default App
