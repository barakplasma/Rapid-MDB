import { DebounceInput } from "react-debounce-input";
import fetch from "isomorphic-unfetch";

import { OMDbMovieSearchResult } from "../LocalTypes/Movie";
import { UpdateSearchResults } from "../../pages";

export const MovieSearchInput = (props: {
  updateSearchResults: UpdateSearchResults;
}) => (
  <DebounceInput
    minLength={3}
    debounceTimeout={500}
    onChange={async(event) =>
      props.updateSearchResults(await searchForMovies(event.target.value))
    }
  />
);

export const searchForMovies = async (title: string, page?: number): Promise<OMDbMovieSearchResult> =>
  await fetch(`http://www.omdbapi.com/?s=${title}&apikey=387fe5c2&type=movie${page ? 'page='+page : ''}`).then(
    res => res.json()
  );
