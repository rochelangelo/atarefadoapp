import React, { useState } from 'react'
import auth from '../auth';


function initialState() {
    return { usuario: '', senha: ''};
}

function Login() {


    const [values, setValues] = useState(initialState);

    function onChange(e) {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    async function logar(usuario, senha){
        return await auth.signIn(usuario, senha);
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log("chgou");
        auth.signIn(values.usuario, values.senha);
    }

    return (
        <div>
            <h1 className="titulo">ATAREFADO</h1>
            <h1>Login</h1>
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
        </div>
    )
}

export default Login
