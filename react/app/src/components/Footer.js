
import React from 'react';

const Footer = props => {
    return (
      <section className="subfooter-list">
        <div className="content">
          <ul className="list list-inline">
            <li className="list-item">
              <img className="logo" src={this.props.logo} alt={this.props.alt} />
            </li>
            <li className="list-item">
              <a href="/" className="link">
                Início
              </a>
            </li>
            <li className="list-item">
              <a href="/sobre-nos" className="link">
                Sobre nós
              </a>
            </li>
            <li className="list-item">
              <a href="/contato" className="link">
                Fale conosco
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
}

export default Footer;
