import { useState } from 'react'
import './App.css'
import Disciplina from './Disciplina'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello World</h1>
     <Disciplina codigo='NfaçoIdeia' nome='Algoritmos2'></Disciplina>
     <Disciplina codigo='DCC206' nome='Desenvolvimento Web 1'></Disciplina>

     <Disciplina codigo='DCC206' nome='Desenvolvimento Web 2'></Disciplina>
     <Disciplina codigo='DCC206' nome='Desenvolvimento Front'></Disciplina>

    </>
  )
}

export default App
