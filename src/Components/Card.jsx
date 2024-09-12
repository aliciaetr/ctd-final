import { Link } from 'react-router-dom'
import { useGlobalState } from './utils/global.context';

const Card = ({ user }) => {
  const { name, username, id } = user
  const { state, dispatch } = useGlobalState()
  const isFav = state.favorites.some(fav => fav.id === id);

  const addFav = () => {
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: user });
  };

  return (
    <div className="card">
      <img src="/public/images/doctor.jpg" alt="" />
      <Link to={`/dentista/${id}`}>
        <p>{name}</p>
      </Link>
      <p>{username}</p>
      <button onClick={addFav}>{isFav ? "Remove fav ❌" : "Add fav ⭐"}</button>
    </div>
  );
};

export default Card;
