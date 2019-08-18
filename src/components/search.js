import React, { useState } from 'react';
import { SearchStyled } from '../styles';
import MovieService from '../services/MovieService';

export default function Search(props){
  const [search,setSearch] = useState('');

  async function handleChange(e) {
    setSearch(e.target.value);
    if(e.target.value === ''){
      props.onChange([]);
      return;
    }
    const resp = await MovieService.getSearchMovie(e.target.value);
    props.onChange(resp.data.results)
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