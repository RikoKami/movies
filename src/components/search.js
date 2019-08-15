import React from 'react';
import { SearchStyled } from '../styles';

export default function Search(){
  const handleChange = () => {}
  return (
    <SearchStyled className="search">
      <input type="text" placeholder="Busque um filme por nome, ano ou gênero..." onChange={handleChange}/>
    </SearchStyled>
  )
}