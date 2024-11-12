import { useState } from 'react'
import './App.css'
import Disciplina from './Disciplina'
type DisciplinaProps = {
    codigo:string;
    nome:string;
}
function App() {
  const [count, setCount] = useState(0)
  
  let disciplinas:DisciplinaProps[] = [
    {codigo:'DCC206', nome:'Desenvolvimento Web 1'},
    {codigo:'DCC206', nome:'Desenvolvimento Web 2'},
    {codigo:'DCC206', nome:'Desenvolvimento Front'}
  ]
  return (
    <>
     <h1>Hello World</h1>
     
    { 
      disciplinas.map(
        (disciplina)=>{
          return <Disciplina codigo={disciplina.codigo} nome={disciplina.nome}/>
        }
      )
    }

    </>
  )
}

export default App
