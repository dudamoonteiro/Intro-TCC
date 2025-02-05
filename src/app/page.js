'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { MyNavbar } from "../../components/NavBar";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import './globals.css';

import './styles.css'
import MyInput from "../../components/MyInput/MyInput";


function Home() {

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
      <MyNavbar></MyNavbar>
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
          <Form noValidate onSubmit={handleSubmit} className="flex-column  form align-items-end">
            <h1 className={styles.title}>Login</h1>
            <Row className="mb-3 flex-column w-100">
              <MyInput title={'Ramal'} className='w-100 rounded-pill'></MyInput>
              <MyInput title={'Senha'} className='w-100 rounded-pill'></MyInput>
            </Row>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
      </div>
      
    </>
  );
}

export default Home;