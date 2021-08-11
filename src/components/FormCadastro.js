import React, { useState } from 'react';

const FormCadastro = () => {
    // captura de dados
    const camposIniciaisDeValores = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: ''
    }

    let { value, setValue} = useState(camposIniciaisDeValores)
    return (
        <h1>FormCadastro</h1>
    )
}

export default FormCadastro;