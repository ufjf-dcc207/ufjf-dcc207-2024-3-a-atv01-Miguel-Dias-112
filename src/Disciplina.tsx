import './Disciplina.css'

type DisciplinaProps = {
    codigo:string;
    nome:string;
    removeHandler:Function;
}
function Disciplina({codigo, nome, removeHandler}:DisciplinaProps) {
    return (
        <div className='disciplina'>
            <div>
                {codigo}
            </div>
            <div>
                {nome}
            </div>
            <button onClick={()=>{removeHandler()}}>X</button>
        </div>
    )
}
export default Disciplina;