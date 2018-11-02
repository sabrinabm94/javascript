import React, { Component } from 'react';

import SliderFull from './SliderFull';
import SliderLogos from './SliderLogos';

import Button from './Button';

class PageHome extends Component {
  render() {
    return (
      <div>
        <div className="page page-home">
          <div className="content">
            <section className="slider-intro">
              <SliderFull image={require('')} alt="Anúncio" />
            </section>
            <section className="section">
              <h2 className="title">Conheça mais sobre nós</div>
              <Button text="Ver mais" link="/PageAboutUs" />
            </section>
            <section className="slider-logos">
              <div className="content">
                <h2 className="title">Parceiros</h2>
                <SliderLogos logo={require('')} alt="logo de parceiro" />
              </div>
            </section>
            <section className="section">
              <h2 className="title">Já é registrado?</div>
              <h2 class="title">Acesse sua conta</h2>
              <Button text="Entrar" link="/PageLogin" />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
