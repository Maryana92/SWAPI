const BASE_URL = 'https://swapi.co/api';

export const getIdFromUrl = url => {
  const [, id] = url.match(/(\d+)\/$/);

  return id;
};

export const get = url => {
  return fetch(BASE_URL + url).then(response => response.json());
};