import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: REACT_APP_API_KEY,
  },
});

export const getTraidingFilms = async page => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getFilmsId = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getFilmsSearch = async (query, page = 1) => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
      page,
    },
  });

  return data;
};

export const getFilmsCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getFilmsReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};

const getTrailerLang = async (id, lang) => {
  const { data } = await instance.get(`/movie/${id}/videos`, {
    params: { language: lang },
  });

  return data;
};

export const getTrailerKey = async id => {
  const lang = ['uk-UA', 'ru-Ru', 'en-US'];
  let keyTrailer = '';
  
  for (let i = 0; i < lang.length; i++) {
    const { results } = await getTrailerLang(id, lang[i]);
    if (results.length) {
      keyTrailer = results[0].key;
      break;
    }
  }
  return keyTrailer;
};
