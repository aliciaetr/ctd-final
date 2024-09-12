import { createContext, useContext, useReducer } from "react";

export const initialState = {theme: "light", data: [], favorites: JSON.parse(localStorage.getItem('favorites')) || []}

export const ContextGlobal = createContext(undefined);

const reducer = (state, action ) => {
  switch (action.type){
    case "CHANGE_THEME":
      return {...state, theme: action.payload}
    case "ADD_FAV":
      const updatedFavorites = [...state.favorites, action.payload]
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      return { ...state, favorites: updatedFavorites }
    default:
      throw new Error()
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ContextGlobal.Provider value={{ state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalState = () => useContext(ContextGlobal)