import api from './api';

export default {
  getListMovies(){
    const config = {
      params : {
        "api_key" : "e07e4635ec0f794a9109edce2b0a4adb",
        "language": "pt-BR"
      }
    }
    return api.get(`/discover/movie`, config);
  },
  
  getMovies(movie_id){
    const config = {
      params : {
        "api_key" : "e07e4635ec0f794a9109edce2b0a4adb",
        "language" : "pt-BR",
      }
    }
    return api.get(`/movie/${movie_id}`, config);
  }

}

