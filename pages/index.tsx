import * as React from "react";
import { Home } from "../src/components/Home";
import { Layout } from "../src/components/Layout";

import { OMDbMovieSearchResult } from "../src/LocalTypes/Movie";
import { searchForMovies } from "../src/components/MovieSearch";

export interface UpdateSearchResults {
  (searchResults: OMDbMovieSearchResult): void;
}

export interface IndexState {
  searchResults: OMDbMovieSearchResult;
}

const getDefault = async () => {
  return { Search: [], totalResults: '0', Response: 'False' }
}

export default class Index extends React.Component<OMDbMovieSearchResult, IndexState> {
  static async getInitialProps(context) {
    console.log(context.query)
    return { searchResults: context.query.q ? await searchForMovies(context.query.q, context.query.page) : await getDefault() }
  }
  
  constructor(props) {
    super(props);
    this.state = { searchResults: props.searchResults };
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }

  public updateSearchResults: UpdateSearchResults = (
    searchResults: OMDbMovieSearchResult
  ) => this.setState({ searchResults });

  render() {
    return (
      <Layout>
        <Home
          updateSearchResults={this.updateSearchResults}
          searchResults={this.state.searchResults}
        />
      </Layout>
    );
  }
}
