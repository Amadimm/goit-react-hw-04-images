import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const KEY = '36309679-9b8a612667de9ba4fc6883166';

export const fetchPhotosWithQuery = async (searchValue, page) => {
  const response = await axios.get(API_URL, {
    params: {
      key: KEY,
      q: searchValue,
      page: page,
      per_page: 15,
    },
  });

  return response.data.hits;
};