import React from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';

class App extends React.Component {
  render() {
    return(
      <div className='app'>
          <Header></Header>
          <main className='main'>
            <Home></Home>
          </main>
          <Footer></Footer>
      </div>
    );
  }
}
export default App;