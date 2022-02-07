import React, { useEffect } from "react";
import axios from "axios";
import MovieComp from "./MovieComp";
import { setMovies } from "../redux/actions/movieActions";

import { Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector((state) => state.allmovies.movies);
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const { data } = await axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=484d69a99953048c74cf429da0b48abf&page=5"
      )
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(data.results);
    dispatch(setMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Row xs="1" md="3" xl="5">
        <MovieComp />
      </Row>
    </div>
  );
};

export default MovieList;
