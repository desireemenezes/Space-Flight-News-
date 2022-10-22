import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../index.css';

import Home from '../views/Home';


function Routes () {
    
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home}/>
          </Switch>
      </BrowserRouter> 
  );
}

export default Routes;