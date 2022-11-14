import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = ({ name, url }) => {
  const [pokemon, setPokemon] = useState({});

  //let random = Math.floor(Math.random() * 850) + 1;

  console.log(url);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, [url]);

  console.log(pokemon);
  //className="rounded-full h-16 w-16 flex bg-teal-400 m-2"
  return (
    <div className="rounded-full bg-teal-400 m-2  inline-block  cursor-pointer relative p-2">
      <img src={`${pokemon?.sprites?.front_default}`} alt={name}></img>
    </div>
  );
};

export default Card;
