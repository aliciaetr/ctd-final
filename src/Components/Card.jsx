import { Link } from 'react-router-dom'
import { useGlobalState } from './utils/global.context';
import { useState } from 'react';

const Card = ({ user, showButton = true }) => {
  const { name, username, id } = user

  const { dispatch } = useGlobalState()

  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: user })
  }

  return (
    <div className="card">
      <img src="/public/images/doctor.jpg" alt="" />
      <Link to={`/dentista/${id}`}>
        <p>{name}</p>
      </Link>
      <p>{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {showButton && (
        <button onClick={addFav} className="favButton">
          Add fav ⭐
        </button>)}
    </div>
  );
};

export default Card;
