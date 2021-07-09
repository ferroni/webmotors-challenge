import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://desafioonline.webmotors.com.br/api/OnlineChallenge'
});