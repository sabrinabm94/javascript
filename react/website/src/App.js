import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './templates/Header';
import Footer from './templates/Footer';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className='app'>
            <Header></Header>
            <main className='main'>
              <Home></Home>
            </main>
            <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;