import React, { useState, useEffect } from 'react';
import './list.scss';

import { Link } from 'react-router-dom';
import MovieService from '../../services/MovieService';

export default function List(props){
  const [movie,setMovie] = useState([]);
  const [search,setSearch] = useState([]);
  const [genre,setGenre] = useState([]);

  useEffect(() =>{
    async function getGenrer() {
      try {
        const resp = await MovieService.getGenres();
        setGenre(resp.data.genres);
        // console.log(resp.data.genres);
      } catch (error) {
        
      }
    }
    getGenrer();

    async function getListMovie() {
      try {
        const resp = await MovieService.getListMovies(); 
        setMovie(resp.data.results);
        setSearch(resp.data.results);
      } catch (error) {
        
      }
    }
    getListMovie();

  }, []);

  useEffect(()=>{
    if(props.search.length == 0) {
      console.log(movie);
      
      setSearch(movie);
      return;
    } 
    console.log(props.search);
    setSearch(props.search);
    
  }, [props.search]);

  return(
    <section className="list">
      {search.map(item => (
        <Link to={`/${item.id}`} key={item.id}>
          <figure className="card">
            <picture>
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
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
        <li className="active"><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
      </ul>
    </section>
  )
}
