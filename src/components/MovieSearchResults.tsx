import * as faker from "faker";
import * as css from "./MovieSearchResults.css";
import { MovieListDisplayParams } from "../LocalTypes/Movie";
import { Cell } from "./Cell";

faker.seed(123);

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
  Title: faker.name.findName(),
  Year: `${faker.random.number({ min: 1921, max: 2017})}`
});

export const MovieListItem = (props: MovieListDisplayParams) => {
  const { Title, Year } = props;
  return (
    <li>
      <img
        className={css.poster}
        alt="Poster"
        src={`http://via.placeholder.com/170x250/${faker.internet
          .color()
          .slice(1)}/00000?text=${Title}-Poster`}
      />
      <Cell {...["Title", Title]} />
      <Cell {...["Year", Year]} />
    </li>
  );
};
