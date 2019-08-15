import React from 'react';
import { HeaderStyled } from '../styles';

export default function Header(props){
  return(
    <HeaderStyled>
      <h1>
        {props.title}
      </h1>
    </HeaderStyled>
  )
}