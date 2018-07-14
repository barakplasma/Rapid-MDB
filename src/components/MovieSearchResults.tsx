import * as css from "./MovieSearchResults.css";
import { MovieListDisplayParams } from "../LocalTypes/Movie";

export const MovieSearchResultsList = () => (
  <ul>
    <MovieListItem {...mockMovieTitle()} />
    <MovieListItem {...mockMovieTitle()} />
    <MovieListItem {...mockMovieTitle()} />
    <MovieListItem {...mockMovieTitle()} />
    <MovieListItem {...mockMovieTitle()} />
    <MovieListItem {...mockMovieTitle()} />
  </ul>
);

const mockMovieTitle = () => ({
  Title: "Alice",
  Year: `${Math.round(Math.random() * 100 + 1900)}`
});

const Cell = (display: [string, string]) => (
  <tr>
    <td>{display[0]}</td>
    <td>{display[1]}</td>
  </tr>
);

export const MovieListItem = (props: MovieListDisplayParams) => {
  const { Title, Year } = props;
  return (
    <li>
      <img
        className={css.poster}
        alt="Poster"
        src={`http://via.placeholder.com/170x250?text=${Title}-Poster`}
      />
      <Cell {...["Title", Title]} />
      <Cell {...["Year", Year]} />
    </li>
  );
};
