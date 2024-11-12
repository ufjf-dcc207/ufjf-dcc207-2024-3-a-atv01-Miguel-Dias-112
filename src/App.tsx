import { useState } from 'react'
import './App.css'
import Disciplina from './Disciplina'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello World</h1>
     <Disciplina></Disciplina>
     <Disciplina></Disciplina>
    </>
  )
}

export default App
