import api from './api';

export default {
  /**
   * Listagem de todos os filmes
   */
  getListMovies(){
    const config = {
      params : {
        "api_key" : "e07e4635ec0f794a9109edce2b0a4adb",
        "language": "pt-BR"
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

  getSearchMovie(){
    const config = {
      params : {
        "api_key" : "e07e4635ec0f794a9109edce2b0a4adb",
        "language" : "pt-BR",
        'page': '1',
        "include_adult": "false"
      }
    }
    return api.get(`/search/movie`, config);
  }
}

