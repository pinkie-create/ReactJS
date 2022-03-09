import { articlesReducer, FETCH_STATUSES } from '../reducer';
import { getArticlesRequest, getArticlesSuccess, getArticlesFailure } from '../actions';

const state = {
  data: [],
  status: FETCH_STATUSES.IDLE,
  error: null,
};

describe("getArticlesRequest tests", () => {
  it("returns state with status request", () => {

    const action = getArticlesRequest();

    const newState = articlesReducer(state, action);

    const expected = {
      data: [],
      error: null,
      status: FETCH_STATUSES.REQUEST,
    };
    expect(newState).toEqual(expected);
  });
  it("returns state with status success", () => {

    const action = getArticlesSuccess({ title: 'Test reducer article' });

    const newState = articlesReducer(state, action);

    const expected = {
      error: null,
      data: action.payload,
      status: FETCH_STATUSES.SUCCESS,
    };
    expect(newState).toEqual(expected);
  });
  it("returns state with status failure", () => {

    const action = getArticlesFailure(null);

    const newState = articlesReducer(state, action);

    const expected = {
      data: [],
      status: FETCH_STATUSES.FAILURE,
      error: action.payload,
    };
    expect(newState).toEqual(expected);
  });
});