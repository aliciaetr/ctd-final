import Card from "../Components/Card";
import { useGlobalState } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useGlobalState()

  return (
    <div>
    <h1>Dentists Favs</h1>
      <div className="card-grid">
      {state.favorites.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
