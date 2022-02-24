// import { useEffect, useState } from "react";

// export const Cataas = () => {
//   const [cataas, setCataas] = useState([]);
//   const API = 'https://cataas.com/cat/gif';
//   // const API = 'https://dog.ceo/api/breeds/image/random';
//   useEffect(() => {
//     fetch(API).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.arrayBuffer();
//     }).then((result) => {
//       console.log(result); //SyntaxError: Unexpected token G in JSON at position 0
//       setCataas(result);
//     })
//       .catch(err => console.warn(err));
//   }, []);
//   return (
//     <>
//       <h1>CATAAS</h1>
//       <div> {cataas.map((cat) => (
//         <div> {cat} </div>
//       ))}
//       </div>
//     </>
//   );
// };
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