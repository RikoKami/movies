import React, { useState, useEffect } from 'react';

import './list.scss';

// import axios from 'axios';
import MovieService from '../../services/MovieService';

export default function List(){
  const [movie,setMovie] = useState([]);

  useEffect(() =>{
    async function getListMovie() {
      const {
        data: { results },
      } = await MovieService.getListMovies();
      setMovie(results);
      console.log(results);
    }
      
    getListMovie();
  }, []);

  return(
    <section className="list">
      {movie.map(item => (
        <a href="" key={item.id}>
          <figure className="card">
            <picture>
              <img src="" alt=""/>
            </picture>
            <figcaption>
              <div className="cardHeader">
                <h3>{item.title}</h3>
              </div>
              <div className="porcentagem">
                <span> {item.vote_average}  %</span>
                </div>
              <div className="date">{item.release_date}</div>
              <p className="desc">{item.overview}</p>
              <ul className="categorias">
                <li>Ação</li>
                <li>Aventura</li>
                <li>Fantasia</li>
              </ul>
            </figcaption>
          </figure>
        </a>
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
