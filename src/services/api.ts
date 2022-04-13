import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
});

export const getRepositoriesByUsername = (username: string, params = {
  per_page: 5,
  sort: 'forks',
  order: 'desc'
}) => {
  return api.get(`users/${username}/repos`, {
    params: params
  });
}

export const getUserFollowers = (username: string, params = {
  per_page: 10,
}) => {
  return api.get(`users/${username}/followers`, {
    params: params
  });
}

export const getUserFollowing = (username: string, params = {
  per_page: 10,
}) => {
  return api.get(`users/${username}/following`, {
    params: params
  });
}

export const searchGithubUser = (queryText: string, params = {
  q: queryText,
  per_page: 15,
}) => {
  return api.get('search/users', {
    params: params
  });
}

export const getUserProfile = (username: string) => {
  return api.get(`users/${username}`);
}

export const getGenericData = (url: string) => {
  return api.get(url);
}


export default api;
