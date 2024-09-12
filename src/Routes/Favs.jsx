import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalState } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useGlobalState()
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    const uniqueFavorites = Array.from(new Set(storedFavorites.map(user => user.id)))
    .map(id => {
      return storedFavorites.find(user => user.id === id)
    });
    setFavorites(uniqueFavorites)
  }, [])

  return (
    <div>
    <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favorites.map((user) => (
          <Card key={user.id} user={user} showButton={false} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
