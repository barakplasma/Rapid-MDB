import * as React from "react";

import { omit } from "ramda";

import { Layout } from "../src/components/Layout";

import { OMDbMovie } from "../src/LocalTypes/Movie";
import { Cell } from "../src/components/Cell";

const defaultMovieData: OMDbMovie = {
  Title: "Guardians of the Galaxy Vol. 2",
  Year: "2017",
  Rated: "PG-13",
  Released: "05 May 2017",
  Runtime: "136 min",
  Genre: "Action, Adventure, Sci-Fi",
  Director: "James Gunn",
  Writer:
    "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
  Actors: "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
  Plot:
    "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
  Language: "English",
  Country: "USA",
  Awards: "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "7.7/10" },
    { Source: "Rotten Tomatoes", Value: "83%" },
    { Source: "Metacritic", Value: "67/100" }
  ],
  Metascore: "67",
  imdbRating: "7.7",
  imdbVotes: "388,497",
  imdbID: "tt3896198",
  Type: "movie",
  DVD: "22 Aug 2017",
  BoxOffice: "$389,804,217",
  Production: "Walt Disney Pictures",
  Website: "https://marvel.com/guardians",
  Response: "True"
};

export default class MovieDetails extends React.Component<Props> {
  static async getInitialProps(context) {
    const props = {
      movieData: context.query.title
        ? await fetchAMovieByTitle(context.query.title)
        : await fetchAMovieById(context.query.imdbID)
    };

    console.log(props);
    return props;
  }

  render() {
    const withoutUnneededDetails = removeUnneededDetailsFromMovies(
      this.props.movieData
    );
    console.log(withoutUnneededDetails);
    const keys = Object.keys(withoutUnneededDetails);
    const vals = Object.values(withoutUnneededDetails);
    return <Layout>
        {/*language=PostCSS*/}
        <style jsx>
          {`
            .formatMovie {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-template-rows: 1fr;
              background-color: #424651;
              color: #af3b6e;
            }
            img {
              grid-row: 1 / 2;
              grid-column: 1/2;
            }
            ul {
              grid-column: 2/3;
              grid-row: 1 / 2;
            }`}
        </style>
        <div className="formatMovie">
          <img src={vals[12]} alt="movie poster" />
          <ul>
            {keys.map((key, i) => <li>
                <Cell key={key+i} {...[key, vals[i]]} />
              </li>)}
          </ul>
        </div>
      </Layout>;
  }
}

interface Props {
  movieData: OMDbMovie;
}

export const fetchAMovieByTitle = async (title: string): Promise<OMDbMovie> => {
  const res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=387fe5c2`);
  const data = await res.json();
  return data;
};

export const fetchAMovieById = async (imdbID: string): Promise<OMDbMovie> => {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${imdbID}&apikey=387fe5c2`
  );
  const data = await res.json();
  return data;
};

export const removeUnneededDetailsFromMovies = (movieData: OMDbMovie) =>
  omit(
    ["imdbID", "Type", "DVD", "BoxOffice", "Ratings", "Response", "Writer"],
    movieData
  );
