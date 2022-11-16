import React from "react";
import Row from "../components/Row";

const Home = () => {
  return (
    <div>
      <Row
        rowID="1"
        title="Pokemon"
        fetchURL={"https://pokeapi.co/api/v2/pokemon/?offset=20&limit=50"}
      />
    </div>
  );
};

export default Home;
