import axios from 'axios';
import ApiEndPoints from './EndPoints';
import { API_CLIENT } from './APIConfig';

export default class ApiIntructor {
    static fetchLoginData(username,password){
      console.warn(`${username} ${password}`);
      return API_CLIENT.post('react-native/movies.json', {
        username,
        password,
      });
    }
}