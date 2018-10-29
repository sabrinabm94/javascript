import React, { Component } from 'react';

import { InputGroup, Form } from 'reactstrap';

import ButtonGrey from './ButtonGrey';

class PageLogin extends Component {
  render() {
    return (
      <div className="page page-login">
        <div className="content">
          <section className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="link">
                Início
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="link active">Entrar</a>
            </li>
          </section>
          <section className="login">
            <h1 className="main-title">Faça login</h1>
            <p className="text">
              Ainda não é cliente? Faça seu cadastro{' '}
              <a href="/registrar" className="link">
                {' '}
                aqui
              </a>
            </p>
            <Form className="inputs">
              <InputGroup className="login">
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Senha" />
              </InputGroup>
              <div className="row">
                <div className="col-lg-7">
                  <p className="text little">
                    Se você esqueceu a sua senha
                    <a href="alterar-senha"> clique aqui </a>
                    para redefini-la.
                  </p>
                </div>
                <div className="col-lg-5">
                  <ButtonGrey text="Entrar" />
                </div>
              </div>
            </Form>
          </section>
        </div>
      </div>
    );
  }
}

export default PageLogin;
