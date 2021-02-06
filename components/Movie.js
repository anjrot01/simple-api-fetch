import { useContext, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { moviecontext } from "../context/movies/moviesContext";
import Collapsed from "./ui/Collapsed";

const Movie = () => {
  const [open, setOpen] = useState(false);
  const { movie } = useContext(moviecontext);
  return (
    <Container>
      <h1 className="text-center my-5">{movie.original_title}</h1>
      <Row>
        <Col md={4}>
          <Image src={movie.poster_path} thumbnail />
        </Col>
        <Col md={8}>
          <Container className="p-2">
            <div>
              <p className="text-wrap fs-1">{movie.overview}</p>
              <p>
                <b>Release Date:</b> {movie.release_date}
              </p>
              <p>
                <b>Home Page: </b> {movie.homepage}
              </p>
            </div>
            <Container>
              <Button onClick={() => setOpen(!open)} aria-controls="seeCharacters" aria-expanded={open} className="d-block mx-auto">
                View Characters
              </Button>
              <Collapsed open={open} />
            </Container>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Movie;
