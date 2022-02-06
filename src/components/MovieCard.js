import React from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

function MovieCard({ movie }) {
  return (
    <Card className="maincard">
      <CardImg
        width="100%"
        height="300px"
        src="https://images.unsplash.com/photo-1508615121316-fe792af62a63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNvbGlkJTIwY29sb3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <CardBody>
        <CardTitle className="title">
          {movie.title}
          <span>({movie.vote_average})</span>
        </CardTitle>
        <CardText className="cardtext">{movie.overview}</CardText>
      </CardBody>
    </Card>
  );
}

export default MovieCard;
