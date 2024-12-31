import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
      <div className='bg-gray-800 h-screen flex items-center justify-center gap-3' style={{ backgroundColor: color }}>
      <button onClick={() => setColor("red")} type="button" className="px-8 py-3 font-semibold rounded bg-red-800">Red</button>
      <button onClick={() => setColor("blue")} type="button" className="px-8 py-3 font-semibold rounded bg-blue-600">Blue</button>
      <button onClick={() => setColor("green")} type="button" className="px-8 py-3 font-semibold rounded bg-green-600">Green</button>
      <button onClick={() => setColor("yellow")} type="button" className="px-8 py-3 font-semibold rounded bg-yellow-600">Yellow</button>
      </div>
    </>
  )
}

export default App
