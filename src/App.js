import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';
import { Hatspage } from './pages/hatspage/hatspage.component'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
