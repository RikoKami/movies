import api from './api';

export default {
  /**
   * Listagem de todos os filmes
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
   * 
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

  getSearchMovie(search){
    const config = {
      params : {
        "api_key" : "e07e4635ec0f794a9109edce2b0a4adb",
        "language" : "pt-BR",
        'page': '1',
        "include_adult": "false",
        "query": search
      }
    }
    return api.get(`/search/movie`, config);
  }
}

