import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import Add from '../Components/Add';
import Edit from '../Components/Edit';
import View from '../Components/View';

function Main() {
  return (
    <div className='main'>
      <Switch>
        <Route path='/add' component={Add} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/:id' component={View} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default Main;
