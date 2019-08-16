import React , { useState } from 'react';
import Header from '../../components/header';
import Search from '../../components/search';
import List from '../../components/list/index';

export default function Home() {
  const [search,setFilterText] = useState('');

  return (
    <main>
      <Header title="Movies"/>
      <div className="container">
        <Search value={search} onChange={()=>{}} />
        <List/>
      </div>
    </main>
  )
}