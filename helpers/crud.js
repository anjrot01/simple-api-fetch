import axiosFetch, { imgUrl } from "../config/axios";

const urlFormat = path => imgUrl + path;

const cleanData = (data, notNull, ...path) => {
  return data
    .filter(x => x[notNull] !== null)
    .map(movie => {
      if (path.length !== 0) {
        path.forEach(p => (movie[p] = urlFormat(movie[p])));
      } else {
        movie[notNull] = urlFormat(movie[notNull]);
      }
      return movie;
    });
};

export const getMovies = async url => {
  const movies = await axiosFetch.get(url);
  const filterMovies = cleanData(movies.data.results, "backdrop_path", "backdrop_path", "poster_path");
  return filterMovies;
};

export const getMovie = async url => {
  const { data } = await axiosFetch.get(url);
  const { backdrop_path, poster_path } = data;
  data.backdrop_path = urlFormat(backdrop_path);
  data.poster_path = urlFormat(poster_path);

  return data;
};

export const getCharacters = async url => {
  try {
    const { data } = await axiosFetch.get(url);
    const casting = cleanData(data.cast, "profile_path");
    return casting;
  } catch (error) {
    console.log("error getCharacters:>> ", error);
  }
};
