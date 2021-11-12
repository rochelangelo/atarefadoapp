import React, { useState, useEffect, useRef } from 'react';
import api from './api';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import auth from "./Auth"


const valoresInicial = {
    titulo: '',
    descricao: '',
    data: '',
}

const FormTarefa = (props) => {

    const [values, setValues] = useState(valoresInicial);
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    let history = useHistory();
    let token = auth.getToken();

    const dataRef = useRef(null);
    const tituRef = useRef(null);
    const descRef = useRef(null);

    const handleChange = e => {
        const name = e.target.getAttribute('name');
        const { value } = e.target;
        setValues({ ...values, [name]: value })
    };

    const onSubmit = e => {
        e.preventDefault();

        tituRef.current.focus()
        descRef.current.focus()
        dataRef.current.focus()

        let name = values.titulo;
        let description = values.descricao;
        let date = values.data;

        console.log(name + "  " + description + "  " + date)

        api
            .post('/v1/tarefas', { name, description, date }, {headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                "Authorization": `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response.data);
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
            });

        setInput('');

    }


    return (
        <form className="form_tarefa" onSubmit={onSubmit}>
            <>
                <h1 className="titulo">ATAREFADO</h1>
                <IoMdArrowRoundBack className={"btn_voltar"} onClick={() => history.push(`/`)}/>
                <div className="form_cadUser">
                    <br/>
                    <h2>Cadastro Tarefa</h2>
                    <input
                        type="text"
                        placeholder="Titulo Tarefa"
                        value={values.titulo}
                        name="titulo"
                        className="inp_tarefa"
                        onChange={handleChange}
                        ref={tituRef}
                    />
                    <input
                        type="text"
                        placeholder="Descrição Tarefa"
                        value={values.descricao}
                        name="descricao"
                        className="inp_tarefa"
                        onChange={handleChange}
                        ref={descRef}
                    />
                    <input
                        type="date"
                        placeholder="Data da Tarefa"
                        value={values.data}
                        name="data"
                        className="inp_tarefa"
                        onChange={handleChange}
                        ref={dataRef}
                    />
                </div>
                <button className="btn_tarefa" >ADICIONAR</button>
            </>
        </form>
    )
}

export default FormTarefa
