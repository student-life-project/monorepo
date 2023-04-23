import axios from 'axios';

export const userRecognitionApi = axios.create({
  baseURL:
    'https://facial-recognition-rjzx6.ondigitalocean.app/user-recognition',
});
