import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://inter.api.joaojob.dev',
  headers: { 'Content-Type': 'application/json' }
});