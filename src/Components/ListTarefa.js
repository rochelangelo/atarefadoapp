import React, { useState }from 'react'
import FormTarefa from './FormTarefa'
import FormTarefaCom from './FormTarefaCom'
import Tarefa from './Tarefa';

function ListTarefa() {

    const [tarefas, setTarefas] = useState([]);

    const addTarefa  = tarefa => {
        if(!tarefa.text || /^\s*$/.test(tarefa.text)) {
            return;
        }

        const novaTarefas = [tarefa, ...tarefas];

        setTarefas(novaTarefas);
    };

    const removerTarefa = id => {
        const removeArr = [...tarefas].filter(tarefa => tarefa.id !== id);

        setTarefas(removeArr);
    }

    const atualizaTarefa = (tarefaId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTarefas(prev => prev.map(item => (item.id === tarefaId ? newValue : item)))
    }

    const concluirTarefa = id => {
        let upTarefa = tarefas.map(tarefa =>{
            if(tarefa.id === id){
                tarefa.isComplete = !tarefa.isComplete;
            }
            return tarefa;
        });
        setTarefas(upTarefa);
    }

    return (
        <div>
            <h1>Oque Você não pode Esquecer?</h1>
            <FormTarefa onSubmit={addTarefa}/>
            <Tarefa
              tarefas={tarefas}
              concluirTarefa={concluirTarefa}
              removerTarefa={removerTarefa}
              atualizaTarefa={atualizaTarefa}
              />
        </div>
    )
}

export default ListTarefa
