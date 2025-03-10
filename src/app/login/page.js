'use client'

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

import './styles.css'
import MyInput from "../../../components/MyInput/MyInput";


function Login() {

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

      <div className="d-flex justify-content-end w-100 corpo">
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
              <h1 className={styles.title}>Login</h1>
              <Row className="mb-column w-80">
                <MyInput title={'Ramal'} className='w-80 rounded-3'></MyInput>
                <MyInput title={'Senha'} className='w-80 rounded-3'></MyInput>
              </Row>
              <Row className="flex-row gap-3 w-100 d-flex justify-content-center">
                <button type="button" class="w-50 btn btn-success">Entrar</button>
                <button type="button" class="w-50 btn btn-danger">Esqueci senha</button>
              </Row>

            </Form>
          )}
        </Formik>
      </div>
      <div className="boasVindas">
        <h3>Seu pedido entregue no coração do seu condomínio.</h3>

      </div>

    </>
  );
}

export default Login;