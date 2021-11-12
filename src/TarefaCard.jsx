import React from "react";
import { useHistory } from "react-router-dom";

const TarefaCard = (props) => {
    const { tarefa } = props;
    const { id, nome, data, descricao, flag } = tarefa;
    let history = useHistory();

    return (
        <div className={tarefa.flag ? 'Tarefa-linha-concluido' : 'Tarefa-linha'} onClick={() => history.push(`/tarefas/${id}`)}>
            <h4>{nome}</h4>
            <h6>Data: {data}</h6>
            {tarefa.flag ? <h6>FINALIZADO</h6> : null}
            <br />
        </div>
    )
}

export default TarefaCard;