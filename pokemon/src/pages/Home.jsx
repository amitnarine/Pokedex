import React from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Row from "../components/Row";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>

      <Row
        rowID="1"
        title="Pokemon"
        fetchURL={"https://pokeapi.co/api/v2/pokemon/?offset=20&limit=50"}
      />
    </div>
  );
};

export default Home;
