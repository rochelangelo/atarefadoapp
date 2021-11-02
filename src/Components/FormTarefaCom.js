import React, { useState, useEffect, useRef } from 'react'

const valoresInicial = {
    titulo: '',
    descricao: '',
    data: '',
    usuarioId: '',
}

function FormTarefa() {

    const [values, setValues] = useState(valoresInicial);


    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value })
    };

    const onSubmit = e => {
        e.preventDefault();
        
    }

    // const handleSubmit = e => {
    //     e.preventDefault();

    //     props.onSubmit({
    //         id: Math.floor(Math.random() * 10000),
    //         text: input
    //     });

    //     setInput('');

    // };


    return (
        // <form className="form_tarefa" onSubmit={handleSubmit}>
        <form className="form_tarefa" onSubmit={onSubmit}>
            {/* {props.edit ? (
                <>
                <input
                    type="text"
                    placeholder="Titulo Tarefa"
                    // value={input}
                    name="titulo"
                    className="inp_tarefa edit"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <input
                    type="text"
                    placeholder="Descrição Tarefa"
                    // value={input}
                    name="descricao"
                    className="inp_tarefa edit"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <input
                    type="text"
                    placeholder="Data da Tarefa"
                    // value={input}
                    name="data"
                    className="inp_tarefa edit"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="btn_tarefa edit" onClick={handleChange}>ATUALIZAR</button>
                </>) : */}
            {/* ( */}
            <>
                <input
                    type="text"
                    placeholder="Titulo Tarefa"
                    value={values.titulo}
                    name="titulo"
                    className="inp_tarefa"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <input
                    type="text"
                    placeholder="Decrição Tarefa"
                    value={values.descricao}
                    name="descricao"
                    className="inp_tarefa"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <input
                    type="text"
                    placeholder="Data da Tarefa"
                    value={values.data}
                    name="data"
                    className="inp_tarefa"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="btn_tarefa">ADICIONAR</button>
            </>
            {/* )} */}


        </form>
    )
}

export default FormTarefa
