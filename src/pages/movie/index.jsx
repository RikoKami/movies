import React , { useState, useEffect } from 'react';

import './movie.scss';

import Header from '../../components/header';
import MovieService from '../../services/MovieService';
import moment from 'moment';
import NoImage from '../../assets/img/noimage.png';

export default function Movie({ match }){
  const [movie,setMovie] = useState();
  const [genre,setGenre] = useState([]);
  const [lang,setLang] = useState([]);
  const [video,setVideo] = useState([]);

  useEffect(() => {
    async function getGenrer() {
      try {
        const resp = await MovieService.getGenres();
        setGenre(resp.data.genres);
      } catch (error) {
        console.log('Api afk.');
      }
    }
    getGenrer();
    
    async function getLang(){
      try {
        const resp = await MovieService.getLang();
        setLang(resp.data);   
      } catch (error) {
        console.log('Api afk.');
      }
    }
    getLang();

    async function getVideo(){
      try {
        const resp = await MovieService.getVideo(match.params.id);
        setVideo( resp.data.results.filter(result => { return result.type === "Trailer" }) );        
      } catch (error) {
        console.log('Api afk.');
      }
    }
    getVideo();

    async function getMovies(){
      const resp = await MovieService.getMovies(match.params.id);
      setMovie(resp.data);     
    }
    getMovies();
  }, [match.params.id]);

  return (
    <main>
      <Header title="Movies"/>
      {movie && 
        <div className="container">       
          <section className="movie">
            <div className="cardHeader">
              <h3>{movie.title}</h3>
              <div className="date">{moment(movie.release_date).format('L')}</div>
            </div>
            <figure>
              <figcaption>
                  <h3>Sinopse</h3>
                  <p className="desc">{(movie.overview === '' ? 'Não há sinopse cadastrada.' : movie.overview)}</p>
                  <h3>Informações</h3>
                  <div className="info">
                    <div>
                      <h4>Situação</h4>
                      <p>{movie.status}</p>
                    </div>
                    <div>
                      <h4>Idioma</h4>
                      {movie.original_language}
                    </div>
                    <div>
                      <h4>Duração</h4>
                      <p>
                        {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min
                      </p>
                    </div>
                    <div>
                      <h4>Orçamento</h4>
                      <p>${(movie.budget).toLocaleString('pt-BR')}</p>
                    </div>
                    <div>
                      <h4>Receita</h4>
                      <p>${(movie.revenue).toLocaleString('pt-BR')}</p>
                    </div>
                    <div>
                      <h4>Lucro</h4>
                      <p>${(movie.revenue - movie.budget).toLocaleString('pt-BR')}</p>
                    </div>
                  </div>
                  <div className="footer">
                    <ul className="categorias">
                      {movie.genres.map(e => (
                        <li key={e}>
                          {e.name}
                        </li>
                      ))}
                    </ul>
                    <div className="porcentagem">
                      <span>{movie.vote_average * 10}%</span>
                    </div>
                  </div>
              </figcaption>
              <picture>
                {
                  (movie.poster_path === null) ? <img src={NoImage} alt=""/> : <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
                }
              </picture>
            </figure>
            
            {video.map(vid => (
              <iframe key={vid.id} src={`https://www.youtube.com/embed/${vid.key}`} title={vid.name} allowFullScreen></iframe>
            ))}
          </section>
        </div>
      }
    </main>
  )
}

