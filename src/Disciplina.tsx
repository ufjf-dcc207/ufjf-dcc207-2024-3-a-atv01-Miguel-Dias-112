import React from 'react';
import './Disciplina.css'

type DisciplinaProps = {
    codigo:string;
    nome:string;
}
function Disciplina({codigo, nome}:DisciplinaProps) {
    return (
        <div className='disciplina'>
            <div>
                {codigo}
            </div>
            <div>
                {nome}
            </div>
        </div>
    )
}
export default Disciplina;