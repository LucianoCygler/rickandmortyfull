import {
  AGREGAR_FAVORITO,
  ELIMINAR_FAVORITO,
  FILTER,
  ORDER,
  GET_FAVORITES,
} from "./actions";
const initialState = {
  myFavorites: [],
  filterFavorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_FAVORITO:
      const newCharacter = action.payload;
      // if (state.allCharacters.some(char => char.id === newCharacter.id)) {
      // personaje ya existe en la lista allCharacters, no lo agregues
      return {
        ...state,
        myFavorites: [...state.myFavorites, newCharacter],
        filterFavorites: [...state.myFavorites, newCharacter],
      };
    // } else {
    //     // personaje no existe en la lista allCharacters, agrégalo a ambas listas
    //     return {
    //         ...state,
    //         myFavorites: [...state.myFavorites, newCharacter],
    //         filterFavorites:[...state.myFavorites, newCharacter],
    //         allCharacters: [...state.allCharacters, newCharacter]
    //     };
    //}

    case ELIMINAR_FAVORITO:
      // const updatedFavorites = state.myFavorites.filter(
      //   (favorite) => favorite.id !== action.payload
      // );
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
        filterFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          filterFavorites: state.myFavorites,
        };
      } else {
        const allCharacters = state.filterFavorites.filter(
          (char) => char.gender === action.payload
        );
        return {
          ...state,
          filterFavorites: allCharacters,
        };
      }

    case ORDER:
      const allCharacters = [...state.filterFavorites].sort((char1, char2) => {
        if (action.payload === "Ascendente") {
          return char1.id - char2.id;
        } else if (action.payload === "Descendente") {
          return char2.id - char1.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        filterFavorites: allCharacters,
      };

    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
