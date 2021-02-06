import { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { moviecontext } from "../context/movies/moviesContext";

const MoviesList = () => {
  const [showMovies, setShowMovies] = useState([]);
  const { movies, searchMovie } = useContext(moviecontext);
  const router = useRouter();

  useEffect(() => {
    const render = () => (router.pathname === "/search" ? setShowMovies(searchMovie) : setShowMovies(movies));
    render();
  }, [router, showMovies]);

  return (
    <Container>
      <Row>
        {showMovies.length !== 0
          ? showMovies.map(x => (
              <Col md={4} className="my-3" key={x.id}>
                <Card>
                  <Card.Img variant="top" src={x.backdrop_path} className="img-thumbnail img-homeList" />
                  <Card.Body>
                    <Card.Title>
                      <Link href={`/movies/${x.id}`}>{x.title}</Link>
                    </Card.Title>
                    <Card.Text>{x.overview.slice(0, 90) + " ..."}</Card.Text>
                    <Card.Subtitle>Release Date: {x.release_date}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
};

export default MoviesList;
