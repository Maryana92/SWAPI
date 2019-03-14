const BASE_API_URL = 'https://swapi.co/api';

const getComponents = (url, params = {}) => {
  return fetch(BASE_API_URL + url)
    .then(response => response.json());
};


// const GetAllItems = (items) => {
//   return getComponents(`/${items}/`, items);
// };

export default getComponents;

