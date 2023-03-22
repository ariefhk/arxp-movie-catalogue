import React from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../utils/data";
import SearchBar from "../../components/SearchBar";
import MovieList from "../../components/MovieList";

export default function SearchPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  const title = searchParams.get("title");

  return <SearchPage onSearch={changeSearchParams} activeKeyword={title} />;
}

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundedMovies: props.activeKeyword
        ? searchMovies(props.activeKeyword)
        : [],
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        foundedMovies: searchMovies(keyword),
      };
    });

    this.props.onSearch(keyword);
  }

  render() {
    const { foundedMovies } = this.state;
    const { onSearch } = this;
    return (
      <section>
        <h2>Search Movies</h2>
        <SearchBar
          search={onSearch}
          defaultKeyword={this.props.activeKeyword}
        />
        <MovieList movies={foundedMovies} />
      </section>
    );
  }
}
