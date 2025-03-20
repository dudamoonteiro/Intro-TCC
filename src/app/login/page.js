'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { MyNavbar } from "../../../components/NavBar";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import './../globals.css';
import { useRouter } from 'next/navigation'; // Use o hook useRouter do Next.js

import './styles.css';
import MyInput from "../../../components/MyInput/MyInput";
import { Lavishly_Yours } from "next/font/google";

function Login() {
  const { Formik } = formik;
  const router = useRouter(); // Instanciando o router do Next.js

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  return (
    <>
      <header>
        <div className="navbar">
          <div className='logo'>
            <img src="/icone.png" alt="" />
            <h1>COND TRACK</h1>
          </div>
        </div>
      </header>

      <div className="corpo">
        <div className="container">
          <form className="form">
            <h1>Login</h1>
            <div className="form-container">
              <label className="title">
                Ramal
              </label>
              <input placeholder="Digite seu ramal" type="text">
              </input>
              <label className="title">
                Senha
              </label>
              <input placeholder="Digite sua senha!" type="password"></input>
              <div className="buttons">
                <button className="bnt" type="submit">Entrar</button>
                <button className="forget">Esqueci Senha</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer>
          <h3>Seu pedido entregue no coração do seu condomínio.</h3>
      </footer>
    </>
  );
}

export default Login;
