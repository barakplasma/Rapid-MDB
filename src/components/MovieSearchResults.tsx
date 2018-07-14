import * as faker from "faker";
import { pick, prop } from "ramda";
import Link from "next/link";
import * as css from "./MovieSearchResults.css";
import {
  MovieListDisplayParams,
  OMDbMovieSearchResult,
  Search
} from "../LocalTypes/Movie";
import { Cell } from "./Cell";

faker.seed(123);

export const searchResultsToList = (
  searchResults: OMDbMovieSearchResult
): MovieListDisplayParams[] =>
  prop("Search", searchResults).map(pick(["Title", "Year", "Poster"]));

export const MovieSearchResultsList = (
  searchResults: OMDbMovieSearchResult
) => {
  const movies = searchResultsToList(searchResults);
  return (
    <ul>
      {movies.map(movie => (
        <Link
          key={movie.Title + movie.Year}
          href={{ pathname: "/MovieDetails", query: { title: movie.Title } }}
        >
          <a>
            <MovieListItem {...movie} />
          </a>
        </Link>
      ))}
    </ul>
  );
};

export const MovieListItem = (props: MovieListDisplayParams) => {
  const { Title, Year, Poster } = props;
  return (
    <li>
      <img className={css.poster} alt="Poster" src={Poster} />
      <Cell {...["Title", Title]} />
      <Cell {...["Year", Year]} />
    </li>
  );
};
