import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Row, Col, Container } from "reactstrap";
const page_number = 1;

function MovieList() {
  return (
    <Container fluid>
      <Row xs={1} md={3} xl={5}></Row>
    </Container>
  );
}

export default MovieList;
