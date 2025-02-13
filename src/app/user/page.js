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
import Maincard from "../../../components/Maincard/Maincard";
import { Container } from "react-bootstrap";

function Adm() {
    return (
        <>
        <div className="page-container">


            <header>
                <div className="icone"> <img src="/icone.png" className="img" alt="logo.png" /></div>
                <div className="barra">
                    <h1>title</h1>
                </div>

            </header>

            <main>
                <div className="container">
                    <Maincard className="retangulo" src='/camera.png' buttonText={"Câmeras"}>Tenha acesso à vigilância da portaria 24 horas
                        por dia e acompanhe em tempo real a chegada
                        da sua entrega com segurança e tranquilidade.</Maincard>

                    <Maincard className="retangulo" src='/sugestão.png' buttonText={"Sugestões"}>Contribua com sugestões construtivas para
                        aprimorar sua experiência e tornar seu lar ainda mais
                        confortável e acolhedor.</Maincard>

                    <Maincard className="retangulo" src='/entregas.png' buttonText={"Entregas"}>Acompanhe com facilidade a lista
                        de encomendas na portaria e seja notificado assim que
                        a sua estiver disponível.</Maincard>
                </div>
            </main>
            <footer className="footer-container mt-5"> {/* O footer agora cresce para ocupar o espaço vazio */}
                <Container className="footer-container w-75 bg-primary">
                    <p>Seu texto do rodapé aqui</p>
                </Container>
            </footer>
            </div>
        </>
    );
}

export default Adm;

// retangulo Class com a div

// 