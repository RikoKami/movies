import React, { useState, useEffect } from 'react';
import './list.scss';

import { Link } from 'react-router-dom';
import MovieService from '../../services/MovieService';

import NoImage from '../../assets/img/noimage.png';

export default function List(props){
  const [movie,setMovie] = useState([]);
  const [search,setSearch] = useState([]);
  const [genre,setGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const pageNumbers = [];

  useEffect(() =>{
    async function getGenrer() {
      try {
        const resp = await MovieService.getGenres();
        setGenre(resp.data.genres);
      } catch (error) {
        
      }
    }
    getGenrer();

    async function getListMovie(page) {
      try {
        const resp = await MovieService.getListMovies(page); 
        setMovie(resp.data.results);
        setSearch(resp.data.results);
        setTotalPage(resp.data.total_pages);
      } catch (error) {
        
      }
    }
    getListMovie(page);

  }, [page]);

  useEffect(()=>{
    if(props.search.length == 0) {
      // console.log(movie);
      
      setSearch(movie);
      return;
    } 
    // console.log(props.search);
    setSearch(props.search);
    
  }, [props.search]);

  for (let i = page; i < page + 5; i++) {
    if (i <= totalPage) pageNumbers.push(i);
  }

  while ( pageNumbers.length < 5) {
    pageNumbers.push(totalPage - pageNumbers.length);
  }

  return(
    <section className="list">
      {search.map(item => (
        <Link to={`/${item.id}`} key={item.id}>
          <figure className="card">
            <picture>
              {
                (item.poster_path === null) ? <img src={NoImage} alt=""/> : <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
              }
            </picture>
            <figcaption>
              <div className="cardHeader">
                <h3>{item.title}</h3>
              </div>
              <div className="porcentagem">
                <span>{item.vote_average * 10}%</span>
                </div>
              <div className="date">{item.release_date}</div>
              <p className="desc">{item.overview}</p>
              <ul className="categorias">
              {item.genre_ids.map(e => (
                <li key={e}>
                  {genre.filter(filter => filter.id == e)[0].name}
                </li>
              ))}
              </ul>
            </figcaption>
          </figure>
        </Link>
      ))}
      
      <ul className="pagination">
        {page != 1 &&
          <>
          <li><a onClick={() => {setPage(1)}}>1</a></li>
          <span>...</span>
          </>
        }
        {pageNumbers.sort().map(item => (
          <li className={item === page ? "active" : ''} key={item}><a onClick={() => {setPage(item)}}>{item}</a></li>
          ))}
        {page != totalPage && 
          <>
            <span>...</span>
            <li><a onClick={() => {setPage(totalPage)}}>{totalPage}</a></li>
          </>
        }
      </ul>
    </section>
  )
}
