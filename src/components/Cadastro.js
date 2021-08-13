import React, { useState, useEffect } from 'react';
import FormCadastro from './FormCadastro';
import fireDb from '../database/firebase';


const Cadastro = () => {
    let [dadosPaciente, setDadosPacientes] = useState({})

    let [idAtual, setIdAtual] = useState('')

    useEffect(() => {
        fireDb.child('pacientes').on('value', dbPhoto => {
            if (dbPhoto.val() != null) {
                setDadosPacientes({
                    ...dbPhoto.val()
                })
            } else {
                setDadosPacientes({})
            }
        })
    }, [])


    const addEdit = obj => {

        if (idAtual == '') {
            fireDb.child('pacientes').push(
                obj,
                error => {
                    if (error) {
                        console.log(error)
                    } else {
                        setIdAtual('')
                    }
                }
            )
        } else {
            fireDb.child(`pacientes/${idAtual}`).set(
                obj,
                err => {
                    if(err) {
                        console.log(err)
                    }
                }
            )
        }
    }

    const deletePaciente = key => {
        if(window.confirm('Deseja realmente deletar esse cadastro?'))
        fireDb.child(`pacientes/${key}`).remove(
          err => {
              if(err) {
                  console.log(err)
              }
          }
        )
        
    }

    return (
        <div>

            <div className="h-100 p-5 text-white bg-primary rounded-3">
                <div className="container">
                    <h2>Cadastro de Pacientes</h2>
                    <p>CRUD cadastro de pacientes</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <FormCadastro {...({ addEdit, idAtual, dadosPaciente })} />
                </div>
                <div className="col">
                    <table className="table caption-top">
                        <thead className="">
                            <tr>
                                <td>Nome Completo</td>
                                <td>Telefone</td>
                                <td>E-mail</td>
                                <td>Ações</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(dadosPaciente).map(id => {
                                    return <tr key={id}>
                                        <td>{dadosPaciente[id].nomeCompleto}</td>
                                        <td>{dadosPaciente[id].telefone}</td>
                                        <td>{dadosPaciente[id].email}</td>

                                        <td>
                                            <a>
                                                <i className="btn btn-primary" onClick={() => { setIdAtual(id)}}>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </i>
                                            </a>
                                            <a>
                                                <i className="btn btn-danger" onClick={ () => deletePaciente(id)}>
                                                    <i className="fas fa-trash"></i>
                                                </i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;

