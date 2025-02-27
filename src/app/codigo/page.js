'use client'
import './../globals.css';
import './style.css'
import { useState } from 'react';

function Codigo() {
    const [email, setEmail] = useState('');

    return (
        <>
            <header>
                <div class="circle">
                    <img src="/logo3.png" alt="" />
                </div>
            </header>


            <main>
                <div className='barra'>
                    <input
                        type="email"
                        className='barras'
                        placeholder="Digite seu email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='quadrados'>
                    <div className='quadrado'>
                        <img src="/codigo.png" alt="" />
                    </div>
                    <div className='quadrado'>
                        <img src="/codigo.png" alt="" />
                    </div>
                    <div className='quadrado'>
                        <img src="/codigo.png" alt="" />
                    </div>
                    <div className='quadrado'>
                        <img src="/codigo.png" alt="" />
                    </div>
                </div>

                <div className='texto'>
                    <h4>Reenviar Código</h4>
                </div>
                <div className='bloco'>
                    <h3>Verificar Código</h3>
                </div>
            </main>





        </>
    );
}

export default Codigo;


