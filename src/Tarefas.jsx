import React, { useEffect, useState } from "react";
import api from "./api";
import TarefaCard from "./TarefaCard"
import { FiLogOut } from "react-icons/fi"
import { useHistory } from "react-router-dom";
import auth from "./Auth"


const Tarefas = () => {

    const [tarefas, setTarefas] = useState();
    const [mostra, setMostra] = useState('false');
    let history = useHistory();
    let token = auth.getToken();

    useEffect(() => {
        api
            .get("/v1/tarefas", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then((response) => {
                const responseTarefas = response.data;
                setTarefas(responseTarefas);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    function logOut() {
        auth.signOut();
        window.location.reload();
    }

    function mostrar() {
        if (mostra) {
            setMostra(false);
        } else {
            setMostra(true);
        }
    }

    return (
        <>
            <h1 className="titulo">ATAREFADO</h1>
            <h1>Oque Você não pode Esquecer?</h1>
            <FiLogOut className="btn_logout" onClick={() => logOut()} />
            <div>
                <button className="btn_addtarefa" onClick={() => history.push('/cadastrar')}>ADICIONAR</button><br />
                <button className="btn_concluidos" onClick={() => mostrar()}>{mostra ? "MOSTRAR FINALIZADOS" : "OCULTAR FINALIZADOS"}</button>
            </div>
            {tarefas ? (
                <div>
                    {/* {tarefas.map((tarefa) => (
                        <TarefaCard key={tarefa.id} tarefa={tarefa} />
                    ))} */}
                    {tarefas.filter((tarefa) => tarefa.flag === false).map((tarefa) => (
                        <TarefaCard key={tarefa.id} tarefa={tarefa} />
                    ))}
                    {!mostra ? (
                        tarefas.filter((tarefa) => tarefa.flag === true).map((tarefa) => (
                            <TarefaCard key={tarefa.id} tarefa={tarefa} />
                        ))) : null}
                </div>
            ) : (
                <h1>Carregando Tarefas</h1>
            )}
        </>
    );
}

export default Tarefas;