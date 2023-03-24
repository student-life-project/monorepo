import axios from 'axios';

export const userRecognitionApi = axios.create({
  baseURL: 'http://147.182.172.231:5000/user-recognition',
});
