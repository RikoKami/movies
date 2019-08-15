import React from 'react';
import Header from './components/header';
import Search from './components/search';
import List from './components/list';

export default function App() {
  return (
    <main>
      <Header title="Movies"/>
      <div className="container">
        <Search/>
        <List/>
      </div>
    </main>
  )
}