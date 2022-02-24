import {
  FETCH_STATUSES
} from './reducer';

export const selectArticles = (state) => state.articles.data;
export const selectArticlesLoading = (state) =>
  state.articles.status === FETCH_STATUSES.REQUEST;
export const selectError = (state) => state.articles.error;

//selectors.js:8 Uncaught TypeError: Cannot read properties of undefined (reading 'error')