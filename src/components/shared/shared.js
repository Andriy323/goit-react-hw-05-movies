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

export const getFilmsId = async (id, lang = 'en-US') => {
  const { data } = await instance.get(`/movie/${id}`, {
    params: { language: lang },
  });

  return data;
};

export const getFilmDetails = async id => {
  const uk = getFilmsId(id, 'uk-UA');
  const ru = getFilmsId(id, 'ru-Ru');
  const en = getFilmsId(id, 'en-US');

  const data = Promise.all([uk, ru, en])
    .then(value => {
      const valueLang = value.find(item => item.overview);
      return valueLang;
    })
    .catch(error => console.log(error));
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
  const ua = getTrailerLang(id, 'uk-UA');
  const ru = getTrailerLang(id, 'ru-Ru');
  const en = getTrailerLang(id, 'en-US');
  const promisTrailer = Promise.all([ua, ru, en])
    .then(value => {
      const data = value.find(({ results }) => results.length > 0);
      return data ? data.results[0].key : '';
    })
    .catch(error => console.log(error, 'error'));

  return promisTrailer;
};
