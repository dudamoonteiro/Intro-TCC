'use client'
import './../globals.css';
import './style.css'

function Entregas() {
    return (
        <>
             <header>
                <div className="navbar">
                <div className='logo'><img src="/icone.png" alt="" />
                    <h1>COND TRACK</h1>
                    <h5>Entregas Pendentes</h5>
                    </div>
                </div>
                <div className="barra"></div>
            </header>

            <main>

                <div className='barras'>
                    <div className='pendentes'> <p>Ana Beatriz Souza – Residente titular do ramal 12</p>
                        <div className='botao'></div>
                    </div>
                    <div className='pendentes'> <p>Marcos Vinícius Lima – Morador principal do ramal 7</p>
                        <div className='botao'></div></div>
                    <div className='pendentes'> <p>Fernanda Costa Oliveira – Titular da unidade no ramal 5</p>
                        <div className='botao'></div></div>
                    <div className='pendentes'> <p>Ricardo Alves Mendes – Residente responsável pelo ramal 3</p>
                        <div className='botao'></div>
                    </div>
                    <div className='pendentes'> <p>Juliana Pereira Santos – Ocupante principal do ramal 8</p>
                        <div className='botao'></div></div>
                </div>
            </main>
        </>
    );
}

export default Entregas;