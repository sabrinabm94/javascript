import React, { Component } from 'react';

import { Form, InputGroup, FormGroup, Label, Input } from 'reactstrap';

import Button from './Button';

class PageRegister extends Component {
  render() {
    return (
      <div className="page page-register">
        <div className="content">
          <section className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="link">
                Início
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="link active">Contato</a>
            </li>
          </section>
          <section className="register">
            <h1 className="main-title">Faça cadastro</h1>
            <p className="text">Ainda não é cliente? Cadastre-se.</p>
            <Form className="form">
              <InputGroup className="inputs">
                <input type="text" placeholder="Nome ou razão social" />
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Confirme seu e-mail" />
                <input type="text" placeholder="Senha" />
                <input type="text" placeholder="Confirme sua senha" />
              </InputGroup>
              <div className="row">
                <div className="col-md-8 col-lg-12">
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" />
                      Receber novidades por e-mail sobre novos produtos e
                      ofertas especiais!
                    </Label>
                  </FormGroup>
                </div>
                <div className="col-0 col-md-0 col-lg-7" />
                <div className="col-md-4 col-lg-5">
                  <Button text="Cadastrar" />
                </div>
              </div>
            </Form>
          </section>
        </div>
      </div>
    );
  }
}

export default PageRegister;
