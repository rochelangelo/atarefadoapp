import React, {useState} from 'react'
import FormTarefa from './FormTarefa'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Tarefa({ tarefas, concluirTarefa, removerTarefa, atualizaTarefa}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const enviarAtualizacao = value => {
        atualizaTarefa(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <FormTarefa edit={edit} onSubmit={enviarAtualizacao} />
    }

    return tarefas.map((tarefa, index) =>(
        <div
            className={tarefa.isComplete ? 'Tarefa-linha-concluido' : 'Tarefa-linha'}
            key={index}
        >
            <div key={tarefa.id} className={'Tarefa-concluir'} onClick={() => concluirTarefa(tarefa.id)}>
                {tarefa.text}
            </div>

            <div className="icons">
                <RiCloseCircleLine
                  onClick={() => removerTarefa(tarefa.id)}
                  className='delete-icon'
                  />
                <TiEdit
                  onClick={() => setEdit({id: tarefa.id, value: tarefa.text})}
                  className='edit-icon'
                  />
            </div>

        </div>
    ))
}

export default Tarefa
