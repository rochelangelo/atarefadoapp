import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "./api";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import auth from "./Auth";


const Tarefa = () => {
    const { id } = useParams();

    const [tarefasDetalhes, setTarefasDetalhes] = useState();

    let history = useHistory();
    let token = auth.getToken();

    useEffect(() => {
        api
            .get(`/v1/tarefasTodos/${id}`, {headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                "Authorization": `Bearer ${token}`
                }
            })
            .then((response) => {
                const responseTarefa = response.data;
                setTarefasDetalhes(responseTarefa);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    function finaliza(id){
        api
            .put(`/v1/tarefaTodosFinalizada/${id}`, {headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                "Authorization": `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response.data);
                history.push("/")
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }


    const { id: tarefaId, nome, descricao, data, flag } = tarefasDetalhes || {};
    return (
        <div className="tarefa_info">
            <IoMdArrowRoundBack className={"btn_voltar"} onClick={() => history.push(`/`)}/>
            <h1>{`Detalhes da tarefa: ${nome}`}</h1>
            <br/>
            <h1>{`${descricao}`}</h1>
            <br/><br/>
            <h3>{`Data Limite: ${data}`}</h3>
            <br/><br/>
            {flag ? (
                null
            ) : (
                <button className="btn_finalizaTarefa" onClick={() => finaliza(tarefaId)}>FINALIZAR</button>
            )}
        </div>


    );
}

export default Tarefa;