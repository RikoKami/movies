import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: block;
  width: 100%;
  text-align:center;
  background: #116193;
  a{
    text-decoration: none;
    h1{
      padding: 10px 0;
      margin: 0;
      color: #02d9db;
      font-family: 'Abel';
      font-weight: 400;
      &:hover{
        color: #fff;
      }
    }
  }
`;

export const SearchStyled = styled.div`
  display: block;
  width: 100%;
  margin: 40px 0;
  input{
    border-radius: 30px;
    padding: 16px 20px;
    background:#ebebeb;
    border: 0;
    width: 100%;
    font-family: 'Abel';
    color: #116193;
    font-size: 18px;
    outline: none;
    &::placeholder{
      color: #116193;
    }
  }
`;