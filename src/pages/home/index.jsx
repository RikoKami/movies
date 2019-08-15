import React from 'react';
import Header from '../../components/header';
import Search from '../../components/search';
import List from '../../components/list/index';

export default function Home() {
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