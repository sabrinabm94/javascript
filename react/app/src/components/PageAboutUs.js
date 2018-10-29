import React, { Component } from 'react';

import Maps from './Maps';
import SliderImage from './SliderImage';

class PageAboutUs extends Component {
  render() {
    return (
      <div className="page page-about-us">
        <div className="content">
          <section className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="link">
                Início
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="link active">Sobre nós</a>
            </li>
          </section>
          <section class="slider">
            <SliderImage alt="Fotos da empresa" />
          </section>
          <section className="text">
            <h2 className="main-title">Sobre nós</h2>
            <p className="text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
            </p>
          </section>
          <section className="maps">
            <b className="text">Localização: </b>
            <div className="map">
              <Maps />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default PageAboutUs;
