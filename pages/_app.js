import MoviesWrapper from "../context/movies/moviesContext";
import { getMovies } from "../helpers/crud";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

const PrincipalApp = ({ Component, pageProps, data }) => {
  return (
    <MoviesWrapper data={data}>
      <Header />
      <Component {...pageProps} />
    </MoviesWrapper>
  );
};

PrincipalApp.getInitialProps = async ctx => {
  const movies = await getMovies("/movie/popular");
  return {
    data: movies
  };
};

export default PrincipalApp;
