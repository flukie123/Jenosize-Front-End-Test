import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Marketplace from './pages/marketplace';
import Stack from './pages/stack';
import About from './pages/about';
import Connectwallet from './pages/connectwallet';
import Feed from './pages/feed';
import './pages/homeElement.js'

function App() {
  return (
    <div className='back1'>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/marketplace' component={Marketplace} />
        <Route path='/stack' component={Stack} />
        <Route path='/about' component={About} />
        <Route path='/feed' component={Feed} />
        <Route path='/connectwallet' component={Connectwallet} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
