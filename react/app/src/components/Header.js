import SubMenu from './SubMenu';

import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faSearch,
  faUserPlus
);

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      isOpen: false,
      collapsed: true
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggleSubMenu() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <header className="header">
        <nav className="hide-mobile">
          <div className="content">
            <div className="row">
              <div className="col-3 col-md-4 col-lg-6 logo">
                <a href="/" className="link">
                  <img src={this.props.logo} className="logo" alt={this.props.alt}/>
                </a>
              </div>
              <div className="col-9 col-md-8 col-lg-6 actions">
                <ul className="list list-inline">
                  <li className="list-item search">
                    <FontAwesomeIcon icon={faSearch} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <ul className="list list-inline">
                <li className="list-item">
                  <a href="/registrar">Fazer cadastro</a>
                </li>
                <li className="list-item">
                  <a href="/sobre-nos">Sobre nós</a>
                </li>
                <li className="list-item">
                  <a href="/contato">Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="hide-desk">
          <div className="content">
            <div className="row">
              <div className="col-6 logo">
                <a href="/" className="link">
                  <img src={this.props.logo} className="logo" alt={this.props.alt}
                  />
                </a>
              </div>
              <div className="col-6 actions">
                <ul className="list-inline list">
                  <li className="list-item">
                    <NavbarToggler className="bars" onClick={this.toggle} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Navbar className="nav-content">
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="user-plus">
                  <FontAwesomeIcon icon={faUserPlus} />
                  <NavLink href="/registrar">Fazer cadastro</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/sobre-nos">Sobre nós</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contato">Contato</NavLink>
                </NavItem>
                <NavItem className="last">
                  <p className="text">
                    <a href="tel:+5547000000" className="link"> (47)000 000</a>
                    <a href="mailto:contato@email.com.br" className="link"> contato@email.com.br
                    </a>
                  </p>
                  <p className="text">
                    Segunda à Sexta das <br />
                    8h às 12h e 13:30 às 18h
                  </p>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </nav>
      </header>
    );
  }
}

export default Header;
