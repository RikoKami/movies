import api from './api';

export default {
  /**
   * Listagem de todos os generos
   */
  getGenres(){
    const config = {
      params : {
        "api_key" : "e07e4635ec0f794a9109edce2b0a4adb",
        "language": "pt-BR"
      }
    }
    return api.get(`/genre/movie/list`, config);
  },

  /**
   * Listagem de todos os filmes
   */
  getListMovies(page){
    const config = {
      params : {
        "api_key" : "e07e4635ec0f794a9109edce2b0a4adb",
        "language": "pt-BR",
        "page": page
      }
    }
    return api.get(`/discover/movie`, config);
  },
  
  /**
   * Movie por id.
   * @param {*} movie_id 
   */
  getMovies(movie_id){
    const config = {
      params : {
        "api_key" : "e07e4635ec0f794a9109edce2b0a4adb",
        "language" : "pt-BR",
      }
    }
    return api.get(`/movie/${movie_id}`, config);
  },

  /**
   * Busca de filmes
   * @param {serach} search 
   */
  getSearchMovie(search){
    const config = {
      params : {
        "api_key" : "e07e4635ec0f794a9109edce2b0a4adb",
        "language" : "pt-BR",
        'page': '1',
        "include_adult": "false",
        "query": search,
      }
    }
    return api.get(`/search/movie`, config);
  },

  /**
   * Idioma
   */
  getLang(){
    const config = {
      params : {
        "api_key" : "e07e4635ec0f794a9109edce2b0a4adb",
        "language": "pt-BR"
      }
    }
    return api.get(`/configuration/languages`, config);
  },

  /**
   * Video por Movie
   * @param {*} movie_id 
   */
  getVideo(movie_id){
    const config = {
      params : {
        "api_key" : "e07e4635ec0f794a9109edce2b0a4adb",
        "language": "pt-BR"
      }
    }
    return api.get(`/movie/${movie_id}/videos`, config);
  },
}

