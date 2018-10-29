import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import PageHome from './PageHome';
import PageContact from './PageContact';
import PageRegister from './PageRegister';
import PageLogin from './PageLogin';
import PageProfile from './PageProfile';
import PageAboutUs from './PageAboutUs';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="root-content">
        <Header logo={require('')} alt="logo" />
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/registrar" component={PageRegister} />
          <Route path="/entrar" component={PageLogin} />
          <Route path="/perfil" component={PageProfile} />
          <Route path="/contato" component={PageContact} />
          <Route path="/sobre-nos" component={PageAboutUs} />
        </Switch>
        <Footer logo={require('')} alt="logo" />
      </div>
    );
  }
}

export default App;
