import React, { useState } from 'react';
import { SearchStyled } from '../styles';
import MovieService from '../services/MovieService';

export default function Search(){
  const [search,setSearch] = useState('');

  async function handleChange(e) {
    const resp = await MovieService.getSearchMovie(search);
    setSearch(e.target.value);
    console.log(search); 
    console.log(resp); 
    if(search == ''){
      // Setar todos os filmes aqui;
    }
  }
  return (
    <SearchStyled className="search">
      <form>
        <input
          type="text"
          value={search}
          placeholder="Busque um filme por nome, ano ou gênero..."
          onChange={handleChange}
        />
      </form>
    </SearchStyled>
  )
}