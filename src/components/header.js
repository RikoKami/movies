import React from 'react';
import { HeaderStyled } from '../styles';
import { Link } from 'react-router-dom';

export default function Header(props){
  return(
    <HeaderStyled>
      <Link to="/">
        <h1>
          {props.title}
        </h1>
      </Link>
    </HeaderStyled>
  )
}