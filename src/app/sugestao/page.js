'use client'

import { useState } from 'react';
import './style.css';
import './../globals.css';

function Sugestao() {
    const [editando, setEditando] = useState(false);
    const [texto, setTexto] = useState('Escreva sua sugestão');

    return (
        <>
            <header>
                <div className="navbar">
                    <div className='logo'>
                        <img src="/icone.png" alt="" />
                        <h1>COND TRACK</h1>
                        <h5>Adicione Sugestões</h5>
                    </div>
                </div>
                <div className="barra"></div>
            </header>

            <main>
                <div className='grande'>
                    <div className='entrega' onClick={() => setEditando(true)}>
                        {editando ? (
                            <textarea
                                className="input-sugestao"
                                value={texto}
                                onChange={(e) => setTexto(e.target.value)}
                                onBlur={() => setEditando(false)} // Sai do modo edição ao clicar fora
                                autoFocus
                            />
                        ) : (
                            <h3>{texto}</h3>
                        )}
                        <img src="/idea.png" alt="" />
                    </div>
                </div>

                <div className='barras'>
                    <div className='pendentes'> 
                        <p>Sugestão em andamento</p>
                        <div className='botao'></div>
                    </div>
                    <div className='pendentes'> 
                        <p>Sugestão em andamento</p>
                        <div className='botao'></div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Sugestao;
