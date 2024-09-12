import axios from "axios";
import { createContext, useContext, useReducer, useEffect, useState } from "react";

export const ContextGlobal = createContext(undefined);

const isFavs = JSON.parse(localStorage.getItem('favorites')) || []

export const initialState = {users: [], theme: "light", favorites: isFavs}


const reducer = (state, action ) => {
  switch (action.type){
    case "GET_USERS":
      return { ...state, users: action.payload }
    case "CHANGE_THEME":
      return {...state, theme: action.payload}
    case "ADD_FAV":   
    const isAlreadyFavorite = state.favorites.some(fav => fav.id === action.payload.id)
      if (isAlreadyFavorite) {
        return state; 
      }
      const updatedFavorites = [...state.favorites, action.payload]
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      return { ...state, favorites: updatedFavorites }
    case "REMOVE_FAV":
      const filteredFavorites = state.favorites.filter((fav) => fav.id !== action.payload.id);
      return { ...state, favorites: filteredFavorites }
    default:
      throw new Error()
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [favorites, setFavorites] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = "https://jsonplaceholder.typicode.com/users"
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      // setChars(res.data.results);
      dispatch({ type: "GET_USERS", payload: res.data })
    });
  }, []);


  return (
    <ContextGlobal.Provider value={{ state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalState = () => useContext(ContextGlobal)