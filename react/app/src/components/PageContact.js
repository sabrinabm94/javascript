import React, { Component } from 'react';

import ButtonGrey from './ButtonGrey';

import {
  InputGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class PageContact extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="page page-contact">
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
          <section className="contact">
            <h2 className="title">Informações de contato</h2>
            <p className="text">
              Preencha o formulário abaixo, retornaremos o mais breve
              possível. Obrigado!
            </p>
            <form action="" className="form">
              <InputGroup className="inputs">
                <Input type="text" placeholder="Nome" id="name" />
                <Input type="text" placeholder="E-mail" id="email" />
                <Input type="text" placeholder="Telefone" id="phone" />
                <Input type="text" placeholder="Assunto" id="subject" />
                <Dropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                >
                  <DropdownToggle caret>Tipo</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Sugestão</DropdownItem>
                    <DropdownItem>Dúvidas</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Mensagem"
                />
              </InputGroup>
              <div className="row">
                <div className="col-lg-7" />
                <div className="col-lg-5">
                  <ButtonGrey text="Enviar" />
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default PageContact;
