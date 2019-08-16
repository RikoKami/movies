import React , { useState, useEffect } from 'react';
import Header from '../../components/header';
import Search from '../../components/search';
import List from '../../components/list/index';

export default function Home() {
  const [search,setSearch] = useState([]);

  return (
    <main>
      <Header title="Movies"/>
      <div className="container">
        <Search onChange={setSearch} />
        <List search={search} />
      </div>
    </main>
  )
}