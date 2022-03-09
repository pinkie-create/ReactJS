import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticles
} from "../../store/articles/actions";
import {
  selectArticles,
  selectArticlesLoading,
  selectError,
} from "../../store/articles/selectors";

export const Articles = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectArticlesLoading);
  const articles = useSelector(selectArticles);

  const getData = async () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <button onClick={getData}>Reflesh</button>
      {error && <h1>Error: Articles Not Found </h1>}
      {loading ? (<CircularProgress />) : (
        <ul> {articles.map((arr) => (
          <li key={arr.id}> {arr.title} </li>
        ))}
        </ul>
      )}
    </>
  );
};