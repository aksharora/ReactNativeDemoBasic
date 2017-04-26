import axios from 'axios';

export const API_CLIENT = axios.create({ baseURL: 'http://api.androidhive.info/json/' });