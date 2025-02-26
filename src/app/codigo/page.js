'use client'
import './../globals.css';
import './style.css'

function Codigo() {
    return (
        <>
            <header>
                <div class="circle">
                    <img src="/logo3.png" alt="" />
                </div>
            </header>


            <main>
                <div className='barra'>
                    <h3>Digite seu email...</h3>
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


