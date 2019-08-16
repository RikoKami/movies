import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';

export default function Routes(){
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Redirect from="*" to="/" />
    </BrowserRouter>
  )
}