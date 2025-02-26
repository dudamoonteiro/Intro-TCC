'use client'

import './style.css'
import './../globals.css';

function trocarSenha() {
    return (
        <>
            <header>
                <div class="circle">
                    <img src="/logo3.png" alt="" />
                  
                </div>
            </header>


            <main>
                <h2>Nova Senha:</h2>
                <div className='barra'>
                    <div className='barras'>
                        <h3>Nova Senha</h3>
                    </div>
                    <div className='barras'>
                        <h3>Confirmar Senha</h3>
                    </div>
                </div>

            </main>



        </>
    );
}

export default trocarSenha;


