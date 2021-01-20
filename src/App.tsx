import React from 'react';
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom';


import './App.scss';
import Main from './components/main';
import Header from './components/header';
import Cards from './components/main/cards';


const App = () => {
  return (
      <Router>
        <div className="App">
          <Header/>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/cards" component={Cards}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
