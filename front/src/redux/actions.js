import axios from "axios";

export const AGREGAR_FAVORITO = "AGREGAR_FAVORITO";
export const ELIMINAR_FAVORITO = "ELIMINAR_FAVORITO";
export const GET_FAVORITES = "GET_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const getFavorites = (character) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/rickandmorty/fav",
        character
      );
      dispatch({ type: GET_FAVORITES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const agregarFavorito = (character) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        character
      );
      dispatch({ type: AGREGAR_FAVORITO, payload: character });
    } catch (error) {
      console.log(error);
    }
  };
};

export const eliminarFavorito = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}`,
        id
      );
      dispatch({ type: ELIMINAR_FAVORITO, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};

// export const eliminarFavorito = (id) => {
//     return { type: ELIMINAR_FAVORITO, payload: id }
// }

// export const filterCards = (gender) => {
//     return { type: FILTER , payload: gender}
// }

// export const orderCards = (id) => {
//     return { type: ORDER , payload: id}
// }
