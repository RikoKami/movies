import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Movie from './pages/movie';

export default function Routes(){
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/:id" component={Movie}/>
      <Redirect from="*" to="/" />
    </BrowserRouter>
  )
}