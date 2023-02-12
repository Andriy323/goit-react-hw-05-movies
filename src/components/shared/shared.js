import axios from 'axios';

const { API_KEY } = process.env;
console.log(process.env.API_KEY)

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

export const getTraidingFilms = async page => {
  const { data } = await instance.get('/trending/movie/day', {
    params: {
      page: page,
    },
  });
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
