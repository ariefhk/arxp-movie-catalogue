import React from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../utils/data";
import MovieDetail from "../../components/MovieDetail";

export default function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailPage id={Number(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: getMovie(props.id),
    };
  }

  render() {
    // const { movies } = this.state;
    return (
      <section>
        <MovieDetail
          title={this.state.movie.title}
          overview={this.state.movie.overview}
          posterPath={this.state.movie.posterPath}
          releaseDate={this.state.movie.releaseDate}
        />
      </section>
    );
  }
}
