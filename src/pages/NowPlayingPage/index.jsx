import React from "react";
import { getNowPlayingMovies } from "../../utils/data";
import MovieList from "../../components/MovieList";

export default class NowPlayingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nowPlayingMovies: getNowPlayingMovies(),
    };
  }

  render() {
    const { nowPlayingMovies } = this.state;
    return (
      <section>
        <h2>Now Playing</h2>
        <MovieList movies={nowPlayingMovies} />
      </section>
    );
  }
}
