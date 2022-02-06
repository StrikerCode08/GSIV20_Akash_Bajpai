import { ActionTypes } from "../constants/action-types";
export const setMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
  };
};

export const setMovie = (movie) => {
  return {
    type: ActionTypes.SET_MOVIE,
    payload: movie,
  };
};
