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
  }
  function removeHandler(index:number){
    console.log('Botão clicado')
    console.log(disciplinas)
    disciplinas.splice(index,1)
    setDisciplinas([...disciplinas])
    
  }
  return (
    <>
     <h1>Adicione Disciplinas com codigo e nome </h1>
     <section className='Inputs'>
        <input ref={inputcode} type="text" />
        <input ref={inputnome}  type="text"/>
        <input className='IPTButton' type="button" value="Increment" onClick={ clickHandler}/>
     </section>

      <section className='Elements'>
      { 
      disciplinas.map(
        (disciplina,index)=>{
          return <Disciplina codigo={disciplina.codigo} removeHandler={()=>{removeHandler(index)}}  nome={disciplina.nome}/>
        }
      )
    }
      </section>
    

    </>
  )
}

export default App
