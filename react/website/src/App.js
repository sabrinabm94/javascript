import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './templates/Header';
import Footer from './templates/Footer';
import Pages from './pages/Pages';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className='app'>
            <Header />
            <main className='main'>
              <Pages />
            </main>
            <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;