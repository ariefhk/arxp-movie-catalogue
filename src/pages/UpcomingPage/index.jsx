import React from "react";
import { getUpcomingMovies } from "../../utils/data";
import MovieList from "../../components/MovieList";

export default class UpcomingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      upcomingMovies: getUpcomingMovies(),
    };
  }

  render() {
    const { upcomingMovies } = this.state;
    return (
      <section>
        <h2>Upcoming Movies</h2>
        <MovieList movies={upcomingMovies} />
      </section>
    );
  }
}
