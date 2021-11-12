import React, { useState } from 'react';
import auth from './Auth';
import { useHistory } from "react-router-dom";



function initialState() {
    return { usuario: '', senha: '' };
}

const Login = () => {

    let history = useHistory();
    const [values, setValues] = useState(initialState);

    const [errorLogin, setErrorLogin] = useState(false);

    function onChange(e) {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }
    function sucess() {
        if (() => auth.isAuthenticated()) {
            history.push('/')
        } else {
            console.log("não logado");
            setErrorLogin(true);
        }
    }
    function onSubmit(e) {
        e.preventDefault();
        auth.signIn(values.usuario, values.senha);
        sucess();
    }
    return (
        <div>
            <h1 className="titulo">ATAREFADO</h1>
            <h1>Login</h1>
            {errorLogin ? <h3 className="errorLogin">Usuario/Senha Invalidos</h3> : null}
            <form className="form_login" onSubmit={onSubmit}>
                <>
                    <label>Usuario</label>
                    <input
                        type="text"
                        placeholder="Usuario"
                        name="usuario"
                        className="inp_usuario"
                        value={values.usuario}
                        onChange={onChange}
                    />
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Senha"
                        name="senha"
                        className="inp_senha"
                        value={values.senha}
                        onChange={onChange}
                    />
                    <button className="btn_login">ADICIONAR</button>
                </>
            </form>
            <p>
                Não tem cadastro?
                <span onClick={() => {history.push("/usuario")}}> Click Aqui</span>
            </p>
        </div>
    )
}

export default Login
