import { MovieListDisplayParams } from "../LocalTypes/Movie";

export const MovieSearchResultsList = () => (
  <ul>
    <MovieListItem {...mockMovieTitle()} />
  </ul>
);

const mockMovieTitle = () => ({
  Title: "Alice",
  Year: "1990"
});

export const MovieListItem = (props: MovieListDisplayParams) => {
  const { Title, Year } = props;
  return (
    <li>
      <div>
        <h4>Title: </h4>
        <span>{Title}</span>
      </div>
      <div>
        <h4>Year: </h4>
        <span>{Year}</span>
      </div>
    </li>
  );
};
