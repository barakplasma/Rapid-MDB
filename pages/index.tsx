import * as React from "react";
import { Home } from "../src/components/Home";
import { Layout } from "../src/components/Layout";

import { OMDbMovieSearchResult } from "../src/LocalTypes/Movie";

export interface UpdateSearchResults {
  (searchResults: OMDbMovieSearchResult): void;
}

export interface IndexState {
  searchResults: OMDbMovieSearchResult;
}

export default class Index extends React.Component<null, IndexState> {
  constructor(props) {
    super(props);
    this.state = { searchResults: {Search: [], totalResults: '0', Response: 'False'} };
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
