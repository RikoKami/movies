import React , { useState, useEffect } from 'react';

import './movie.scss';

import Header from '../../components/header';
import MovieService from '../../services/MovieService';

export default function Movie({ match }){
  const [movie,setMovie] = useState();
  const [genre,setGenre] = useState([]);

  useEffect(() => {
    async function getGenrer() {
      try {
        const resp = await MovieService.getGenres();
        setGenre(resp.data.genres);
      } catch (error) {
        
      }
    }
    getGenrer();
    async function getMovies(){
      const resp = await MovieService.getMovies(match.params.id);
      console.log(resp.data);
      setMovie(resp.data);
    }
    getMovies();
  }, []);

  return (
    <main>
      <Header title="Movies"/>
      {movie &&
      <div className="container">       
        <section className="movie">
          <div className="cardHeader">
            <h3>{movie.title}</h3>
            <div className="date">{movie.release_date}</div>
          </div>
          <figure>
            <figcaption>
              <div className="porcentagem">
                <span>{movie.vote_average * 10}%</span>
                </div>
                <p className="desc">{movie.overview}</p>
                <ul className="categorias">
                  {movie.genres.map(e => (
                    <li key={e}>
                      {e.name}
                    </li>
                  ))}
                </ul>
            </figcaption>
            <picture>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
            </picture>
          </figure>
        </section>
      </div>
      }
    </main>
  )
}

