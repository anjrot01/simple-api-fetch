import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getMovie, getCharacters } from "../../helpers/crud";
import Movie from "../../components/Movie";
import { moviecontext } from "../../context/movies/moviesContext";

const MovieId = ({ data }) => {
  const { characters, movie } = data;
  const { getMovieById, getCharacters } = useContext(moviecontext);
  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      getMovieById(movie);
      getCharacters(characters);
    }
  }, [movie, characters]);
  return (
    <Container>
      <Movie />
    </Container>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  try {
    const movie = await getMovie(`/movie/${id}`);
    const characters = await getCharacters(`/movie/${id}/credits`);

    return { props: { data: { characters, movie } } };
  } catch (error) {
    console.log("error GetServerSideProps de [id].js:>> ", error);
  }
}

export default MovieId;
