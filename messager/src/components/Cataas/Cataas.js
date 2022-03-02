import { useEffect, useState } from "react";

export const Cataas = () => {
  const [cataas, setCataas] = useState([]);
  const API = 'https://cataas.com/cat/gif';
  // const API = 'https://dog.ceo/api/breeds/image/random';
  useEffect(() => {
    fetch(API).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.arrayBuffer();
    }).then((result) => {
      console.log(result); //SyntaxError: Unexpected token G in JSON at position 0
      setCataas(result);
    })
      .catch(err => console.warn(err));
  }, []);
  return (
    <>
      <h1>CATAAS</h1>
      <div> {cataas.map((cat) => (
        <div> {cat} </div>
      ))}
      </div>
    </>
  );
};