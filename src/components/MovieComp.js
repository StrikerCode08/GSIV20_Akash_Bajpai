import React from "react";
import {
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Container,
} from "reactstrap";
import { useSelector } from "react-redux";

const MovieComp = () => {
  const movies = useSelector((state) => state.allmovies.movies);
  const movieList = movies.map((movie, index) => {
    return (
      <Container fluid>
        <Col>
          <Card className="maincard">
            <CardBody>
              <CardImg />
              <CardTitle className="title">{movie.title}</CardTitle>
              <span>({movie.vote_average})</span>
              <CardText className="cardtext">{movie.overview}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Container>
    );
  });
  return <>{movieList}</>;
};

export default MovieComp;
