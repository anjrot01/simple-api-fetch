import { createContext, useReducer, useEffect } from "react";
import moviesReducer from "./moviesReducer";

export const moviecontext = createContext();

export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const SEARCH_MOVIES = "SEARCH_MOVIES";

const moviesWrapper = ({ children, data }) => {
  const initialState = {
    movies: [],
    movie: {},
    characters: [],
    character: {},
    searchMovie: []
  };

  const [state, dispatch] = useReducer(moviesReducer, initialState);

  useEffect(() => {
    if (data.length !== 0) {
      dispatch({
        type: GET_MOVIES,
        payload: data
      });
    }
  }, [data]);

  const searchMovies = payload => {
    dispatch({
      type: SEARCH_MOVIES,
      payload
    });
  };

  const getMovieById = payload =>
    dispatch({
      type: GET_MOVIE,
      payload
    });

  const getCharacters = payload =>
    dispatch({
      type: GET_CHARACTERS,
      payload
    });

  return (
    <moviecontext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        character: state.character,
        characters: state.characters,
        searchMovie: state.searchMovie,
        getMovieById,
        getCharacters,
        searchMovies
      }}
    >
      {children}
    </moviecontext.Provider>
  );
};
export default moviesWrapper;
