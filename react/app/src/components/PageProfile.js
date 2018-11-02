import React, { Component } from 'react';

import { Form } from 'reactstrap';

import SidebarLogged from './SidebarLogged';
import Button from './Button';

class PageProfile extends Component {
  render() {
    return (
      <div className="page page-profile page-checkout">
        <div className="content">
          <section className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="link">
                Início
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="link active">Perfil</a>
            </li>
          </section>
          <section className="register">
            <Form className="form">
              <h1 className="title">Perfil</h1>
              <div className="basic-register">
                <p className="subtitle">Informações</p>
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-3 information">
                    <p className="text">E-mail</p>
                    <p className="text">Nome completo</p>
                    <p className="text">Data de nascimento</p>
                    <p className="text">Telefone</p>
                  </div>
                  <div className="col-6 col-md-8 col-lg-9 results">
                    <p className="text">joaosilva@gmail.com</p>
                    <p className="text">João Silva Pereira</p>
                    <p className="text">12/10/1969</p>
                    <p className="text">3333-3333</p>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-4">
                      <Button text="Editar" />
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </section>
        </div>
      </div>
    );
  }
}

export default PageProfile;
