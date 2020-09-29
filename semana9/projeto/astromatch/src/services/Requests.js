import axios from 'axios';
import { BASE_URL_API } from "../constants/Urls";

export const getProfileToChoose = () => {
    const request = axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/astor/person')
};

export const getMatches = () => {
  return axios.get(`${BASE_URL_API}/matches`);
};

export const ChoosePerson = () => {
    return axios.get(`${BASE_URL_API}/choose-person`);
  };

export const clear = () => {
    return axios.get(`${BASE_URL_API}/clear`);
  };