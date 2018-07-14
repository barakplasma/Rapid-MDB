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
  return <ul>
      {movies.map((movie, i) => (
        <MovieListItem key={i + movie.Title + movie.Year} {...movie} />
      ))}
    </ul>;
};

export const MovieListItem = (props: MovieListDisplayParams) => {
  const { Title, Year, Poster } = props;
  return <li className={css.movieListItemContainer}>
      <Link href={{ pathname: "/MovieDetails", query: { title: Title } }} prefetch>
        <a className={css.movieListItem}>
          <img className={css.poster} alt="Poster" src={Poster} />
          <Cell className={css.title} {...["Title", Title]} />
          <Cell className={css.year} {...["Year", Year]} />
        </a>
      </Link>
    </li>;
};
