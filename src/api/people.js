import { get, getIdFromUrl } from './api';

const BASE_URL = '/people'


export const getAll = async () => {
  const { results } = await get(BASE_URL);
  
  return results.map(person => {
    return {
      ...person,
      id: getIdFromUrl(person.url),
    };
  })
}

// export const getOne = (id)  => (
//    get(`${BASE_URL}/${id})
// )