'use client'

import './style.css'
import './../globals.css';
import { useState } from 'react';

function TrocarSenha() {
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

  
    const alterarSenha = () => {
        if (novaSenha === '' || confirmarSenha === '') {
            setMensagem('Por favor, preencha os campos.');
            return;
        }

        if (novaSenha === confirmarSenha) {
            setMensagem('✅ Senha alterada com sucesso!');
        } else {
            setMensagem('❌ As senhas não coincidem. Tente novamente.');
        }
    };

    return (
        <>
            <header>
                <div className="circle">
                    <img src="/logo3.png" alt="" />
                </div>
            </header>

            <main>
                <h2>Nova Senha:</h2>
                <div className='barra'>
                    <input
                        type="password"
                        className='barras'
                        placeholder="Nova Senha"
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                    />

                    <input
                        type="password"
                        className='barras'
                        placeholder="Confirmar Senha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                    />

                  
                    <div className='enviar' onClick={alterarSenha}>
                        <h5>Confirmar nova senha</h5>
                    </div>

               
                    {mensagem && <p className="mensagem">{mensagem}</p>}
                </div>
            </main>
        </>
    );
}

export default TrocarSenha;
