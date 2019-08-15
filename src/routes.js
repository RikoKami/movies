import React from 'react';

import Home from './pages/home';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

export default function Routes(){
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Redirect from="*" to="/" />
    </BrowserRouter>
  )
}