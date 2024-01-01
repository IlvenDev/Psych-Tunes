import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' w-full bg-slate-500 overflow-hidden'>
      <Navbar />
    </div>
  )
}

export default App
