import * as React from "react";
import * as classnames from "classnames";
import * as css from "./Home.css";

import Link from 'next/link';

import { MovieSearchInput } from "./MovieSearch";
import { MovieSearchResultsList } from "./MovieSearchResults";
import { OMDbMovieSearchResult } from "../LocalTypes/Movie";
import { UpdateSearchResults } from "../../pages";

export const Home = (props: {
  searchResults: OMDbMovieSearchResult;
  updateSearchResults: UpdateSearchResults;
}) => (
  <main className={classnames(css.home)}>
    <h1>Search</h1>
    <MovieSearchInput updateSearchResults={props.updateSearchResults} />
    <MovieSearchResultsList {...props.searchResults} />
  </main>
);
