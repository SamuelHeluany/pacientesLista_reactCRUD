import React, { useEffect, useState } from 'react';
import Cadastro from './Cadastro'

const FormCadastro = (props) => {
    // captura de dados
    const camposIniciaisDeValores = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: ''
    }

    let [values, setValues] = useState(camposIniciaisDeValores)

    useEffect( () => {
        if(props.idAtual == ''){
            setValues({
                ...camposIniciaisDeValores,
            })
        } else {
            setValues({
                ...props.dadosPaciente[props.idAtual]
            })
        }
    }, [props.idAtual, props.dadosPaciente])

    const manipuladorInputChange = e => {
        let { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const manipuladorFormEnvio = e => {
        e.preventDefault()
        props.addEdit(values)
    }

    return (
        <form autoComplete="off" onSubmit={manipuladorFormEnvio}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    <i className="fas fa-user"></i>
                </span>
                <input type="text" className="form-control"
                    placeholder="Nome Completo" name="nomeCompleto"
                    value={values.nomeCompleto}
                    onChange={manipuladorInputChange} />
            </div>

            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="fas fa-mobile-alt"></i>
                        </span>
                        <input type="text" className="form-control"
                            placeholder="Telefone" name="telefone"
                            value={values.telefone}
                            onChange={manipuladorInputChange} />
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <input type="text" className="form-control"
                            placeholder="E-mail" name="email"
                            value={values.email}
                            onChange={manipuladorInputChange} />
                    </div>
                </div>


                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="far fa-address-card"></i>
                    </span>
                    <input type="text" className="form-control"
                        placeholder="Endereço" name="endereco"
                        value={values.endereco}
                        onChange={manipuladorInputChange} />
                </div>

                <div className="d-grid gap-2 ">
                    <input type="submit" value={ props.idAtual == '' ? 'Cadastrar' : 'Atualizar'} className="btn btn-primary" />
                </div>
            </div>
        </form>
    )
}

export default FormCadastro;