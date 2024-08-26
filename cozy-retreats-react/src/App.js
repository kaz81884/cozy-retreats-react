// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cabin1 from './pages/Cabin1';
import Cabin2 from './pages/Cabin2';
import Cabin3 from './pages/Cabin3';
import Attractions from './pages/Attractions';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cabin1" component={Cabin1} />
          <Route path="/cabin2" component={Cabin2} />
          <Route path="/cabin3" component={Cabin3} />
          <Route path="/attractions" component={Attractions} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;