import { Link } from "react-router-dom";
import { useGlobalState } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useGlobalState()

  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light'
    dispatch({ type: 'CHANGE_THEME', payload: newTheme})

  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={`/`}>Home</Link>
      <Link to={`/contact`}>Contact</Link>
      <Link to={`/favs`}>Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>change theme</button>
    </nav>
  )
}

export default Navbar