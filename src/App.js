import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import './App.css';
import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';
import Contact from './views/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
         <Header />
          <h1 className="App-title">Welcome to React Portfolie</h1>


      <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
      </main>
        <Footer />

      </Fragment>
    </BrowserRouter>

   );
  }
}
export default App;
