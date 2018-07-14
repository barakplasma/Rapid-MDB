import * as React from "react";
import * as classnames from "classnames";
import * as css from "./Home.css";

import { MovieSearchInput } from "./MovieSearch";
import { MovieSearchResultsList } from "./MovieSearchResults"

export const Home = props => (
  <main className={classnames(css.home)}>
    <h1>Search</h1>
    <MovieSearchInput />
    <MovieSearchResultsList />
  </main>
);
