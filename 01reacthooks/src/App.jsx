import react, { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0  )

//Assignment - Add Value cannot exceed to 20
  const addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1)
    }else {
      alert(`Counter Value is already ${counter}, Value cannot exceed 20`)
    }
    
  }
  /* Below interview question to add multiple values.
  const addValue = () => {
  
    setCounter = counter + 1
    setCounter(preCounter => counter + 1)
    setCounter(preCounter => counter + 1)
    setCounter(preCounter => counter + 1)
  
  }
  */

  //Assignment - Remove Value cannot be negative
  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }else {
      alert(`Counter Value is already ${counter}, Negative values are not allowed`)
    }
    }

  return (
    <>
      <h1>React Counter to Learn Hooks</h1>
      <h2>Counter is: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
