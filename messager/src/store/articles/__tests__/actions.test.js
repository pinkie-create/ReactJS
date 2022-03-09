import {
  getArticlesSuccess, GET_ARTICLES_SUCCESS, getArticlesFailure, getArticlesRequest, getArticles
} from '../actions';

describe("getArticlesSuccess tests", () => {
  it("returns obj with type and payload", () => {
    const payload = [];
    const expected = {
      type: GET_ARTICLES_SUCCESS,
      payload,
    };

    const received = getArticlesSuccess(payload);
    expect(expected).toEqual(received);
  });
});

describe("getArticlesTest", () => {
  it("calls fn passed as an arg with getArticlesRequest", () => {
    const mockDispatch = jest.fn();

    getArticles()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest());
  });

  it("calls fn passed as an arg with getArticlesSuccess if fetch was OK", async () => {
    const mockDispatch = jest.fn();
    const result = ["test"];
    // eslint-disable-next-line no-undef
    fetchMock.mockResponseOnce(JSON.stringify(result));

    await getArticles()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(result));
  });

  it("calls fn passed as an arg with getArticlesFailure if fetch was FAIL", async () => {
    const mockDispatch = jest.fn();
    const error = new Error("fetch error");
    // eslint-disable-next-line no-undef
    fetchMock.mockRejectOnce(error);

    await getArticles()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesFailure(error));
  });
});