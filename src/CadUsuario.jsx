import React, { useState, useEffect, useRef } from 'react';
import api from './api';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useHistory } from "react-router-dom";


const valoresInicial = {
    name: '',
    user: '',
    password: '',
}

const FormTarefa = (props) => {

    const [values, setValues] = useState(valoresInicial);
    let history = useHistory();

    const senhaRef = useRef(null);
    const nomeRef = useRef(null);
    const userRef = useRef(null);

    const handleChange = e => {
        const name = e.target.getAttribute('name');
        const { value } = e.target;
        setValues({ ...values, [name]: value })
    };

    const onSubmit = e => {
        e.preventDefault();

        nomeRef.current.focus()
        userRef.current.focus()
        senhaRef.current.focus()

        let name = values.nome;
        let user = values.usuario;
        let password = values.senha;


        api
            .post('/v1/usuario', { name, user, password })
            .then((response) => {
                console.log(response.data);
                history.push("/login");
            })
            .catch((error) => {
                console.log(error);
            });

    }


    return (
        <form className="form_tarefa" onSubmit={onSubmit}>
            <>
                <h1 className="titulo">ATAREFADO</h1>
                <IoMdArrowRoundBack className={"btn_voltar"} onClick={() => history.push(`/login`)} />
                <div className="form_cadUser">
                    <h2>Cadastro usuario</h2>
                    <input
                        type="text"
                        placeholder="Seu Nome"
                        value={values.nome}
                        name="nome"
                        className="inp_tarefa"
                        onChange={handleChange}
                        ref={nomeRef}
                    />
                    <input
                        type="text"
                        placeholder="Digite seu Usuario"
                        value={values.usuario}
                        name="usuario"
                        className="inp_tarefa"
                        onChange={handleChange}
                        ref={userRef}
                    />
                    <input
                        type="password"
                        placeholder="Digite sua Senha"
                        value={values.senha}
                        name="senha"
                        className="inp_tarefa"
                        onChange={handleChange}
                        ref={senhaRef}
                    />
                </div>
                <br/>
                <button className="btn_tarefa" >CADASTRAR</button>
            </>
        </form>
    )
}

export default FormTarefa
