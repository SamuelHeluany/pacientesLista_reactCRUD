import React from 'react';
import FormCadastro from './FormCadastro';

const Cadastro = () => {
    return (
        <div>
        
        <div className="h-100 p-5 text-white bg-dark rounded-3">
            <div className="container">
                <h2>Cadastro de Pacientes</h2>
                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
            </div>
        </div>
        
        <div className="row">
           <div className="col">
               <FormCadastro />
           </div>
           <div className="col">
                <h2>Lista de pacientes</h2>
           </div>
           
        </div>
        </div>
    )
}

export default Cadastro;

