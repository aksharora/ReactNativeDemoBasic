import axios from 'axios';
import ApiEndPoints from './EndPoints';
import { API_CLIENT } from './APIConfig';

export default class ApiIntructor {
    static fetchLoginData(username,password){
      return API_CLIENT.post('default/login', {
        username,
        password,
      });
    }
    
    static fetchMovieData(){
      return API_CLIENT.get('movies.json');
    }
}