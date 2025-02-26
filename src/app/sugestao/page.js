'use client'

import './style.css'
import './../globals.css';

function Sugestao() {
    return (
        <>
            <header>
                <div className="navbar">
                <img src="/seta.png" alt="" />
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
                    <div className='entrega'>
                        <h3>Escreva sua sugestão</h3>
                        <img src="/idea.png" alt="" /></div>
                </div>

                <div className='barras'>
                    <div className='pendentes'> <p>Sugestão em andamento</p>
                        <div className='botao'></div></div>
                    <div className='pendentes'> <p>Sugestão em andamento</p>
                        <div className='botao'></div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Sugestao;