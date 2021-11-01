import React, { useState, useEffect, useRef } from 'react'

function FormTarefa(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');

    };


    return (
        <form className="form_tarefa" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input
                    type="text"
                    placeholder="Atualizar Tarefa"
                    value={input}
                    name="text"
                    className="inp_tarefa edit"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="btn_tarefa edit">ATUALIZAR</button>
                </>) :
            (
                <>
                <input
                    type="text"
                    placeholder="Adicionar Tarefa"
                    value={input}
                    name="text"
                    className="inp_tarefa"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="btn_tarefa">ADICIONAR</button>
                </>
            )}


        </form>
    )
}

export default FormTarefa
