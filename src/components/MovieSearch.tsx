import { DebounceInput } from "react-debounce-input";
import fetch from "isomorphic-unfetch";

import { OMDbMovieSearchResult } from '../LocalTypes/Movie';

export const MovieSearchInput = () => <DebounceInput minLength={3} debounceTimeout={500} onChange={event => console.log(searchForMovies(event.target.value))} />;

const searchForMovies = (title: string): OMDbMovieSearchResult =>
  fetch(`http://www.omdbapi.com/?s=${title}&apikey=387fe5c2&type=movie`).then(
    res => res.json()
  );