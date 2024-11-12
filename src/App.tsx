import { useRef, useState } from 'react'
import './App.css'
import Disciplina from './Disciplina'
type DisciplinaProps = {
    codigo:string;
    nome:string;
}
function App() {
  let _disciplinas:DisciplinaProps[] = [
    {codigo:'DCC206', nome:'Desenvolvimento Web 1'},
    {codigo:'DCC206', nome:'Desenvolvimento Web 2'},
    {codigo:'DCC206', nome:'Desenvolvimento Front'}
  ]

  const [disciplinas, setDisciplinas] = useState(_disciplinas)
  const inputcode = useRef(null)
  const inputnome = useRef(null)

  function clickHandler(){
    const nome = (inputnome.current as unknown as HTMLInputElement).value;
    const codigo = (inputcode.current as unknown as HTMLInputElement).value;
    
    setDisciplinas([...disciplinas, {codigo:codigo, nome:nome}])
    console.log('Botão clicado')
  }
  
  return (
    <>
     <h1>Hello World</h1>
     <section>
        <input ref={inputcode} type="text" />
        <input ref={inputnome}  type="text"/>
        <input type="button" value="Increment" onClick={ ()=>{clickHandler('aa','aaa')}}/>
     </section>

    
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
