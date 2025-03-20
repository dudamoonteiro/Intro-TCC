'use client'

import Image from "next/image";
import styles from "./cadastro.module.css";
import { MyNavbar } from "../../../components/NavBar";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import './../globals.css';

import './styles.css'
import MyInput from "../../../components/MyInput/MyInput";


function Cadastro() {

  const { Formik } = formik;

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
      
      <div className="d-flex align-items-end w-100 corpo2 flex-column">
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            firstName: '',
            lastName: '',
            username: '',
            city: '',
            state: '',
            zip: '',
            terms: false,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit} className="form align-items-end justify-content-end">
              <h1 className={styles.title}>Cadastrar</h1>
              <Row className="mb-column w-100">
                <MyInput title={'Ramal'} className='w-100 rounded-3'></MyInput>
                <MyInput title={'Email'} className='w-100 rounded-3'></MyInput>
                <MyInput title={'Senha'} className='w-100 rounded-3'></MyInput>

              </Row>
              <Row className="botoes-login">  
                <button type="submit" className="w-50 btn btn-success">
                  Entrar
                </button>
                <button type="button" className="w-50 btn btn-danger">Esqueci senha</button>
              </Row>
            </Form>
          )}
          
        </Formik>
        <div className="align-items-start w-100 boasVindas">
        <h4 className="boasVindas">Sua entrega realizada com eficiência e comodidade
        dentro do seu condomínio.</h4>
        </div>
      </div>
    </>
  );
}

export default Cadastro;