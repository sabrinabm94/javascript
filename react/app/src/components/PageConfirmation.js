import React, { Component } from 'react';

class PageConfirmation extends Component {
  render() {
    return (
      <div className="page page-confirmation">
        <div className="content">
          <section className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="link">
                Início
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="link active">Cadastro</a>
            </li>
          </section>
          <section class="section">
            <h2 className="title">Parabéns! Seu cadastro foi executado com sucesso</h2>
            <h3 className="text">Aguarde pela confirmação enviada em seu e-mail.</h3>
          </section>
        </div>
      </div>
    );
  }
}

export default PageConfirmation;
