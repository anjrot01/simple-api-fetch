import { Container } from "react-bootstrap";
import MoviesList from "../components/MoviesList";

const HomePage = () => {
  return (
    <Container>
      <h1 className="primerTitulo my-3">Movies</h1>
      <MoviesList />
    </Container>
  );
};
export default HomePage;
