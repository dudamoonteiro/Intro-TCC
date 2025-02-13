'use client'

import Image from "next/image";
import styles from "./adm.module.css";
import { MyNavbar } from "../../../components/NavBar";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './style.css'
import MyInput from "../../../components/MyInput/MyInput";
import './../globals.css';

function Adm() {
    return (
        <>
            <header>
                <div className="icone"> <img src="/icone.png" alt="" /></div>
                <div className="barra">
                    <h1>Administration</h1>
                </div>

            </header>

            <main>  
                <div className="container">
                    <div className="retangulo">
                            <div className="bloco"> <img src="/sugestão.png" alt="" />
                            </div>
                            <h2>Sugestões</h2>
                        <div className="bloco"> <img src="/entregas.png" alt="" /></div>
                        <h2>Entregas</h2>
                    </div>

                    <div className="retangulo">
                        <div className="bloco"> <img src="/alerta.png" alt="" /></div>
                        <h2>Avisos</h2>
                        <div className="bloco"> <img src="/addUser.png" alt="" /></div>
                        <h2>Cadastrar usuário</h2>
                    </div>
                    <div className="retangulo">
                        <div className="bloco"> <img src="/camera.png" alt="" /></div>
                        <h2>Câmera</h2>
                        <div className="bloco"> <img src="/deleteUser.png" alt="" /></div>
                        <h2>Deletar usuário</h2>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Adm;
