import React from "react";
import Proptypes from "prop-types";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: props.defaultKeyword || "",
    };

    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onHandleSubmit(event) {
    event.preventDefault();
    this.props.search(this.state.keyword);
  }

  onKeywordChangeHandler(event) {
    const { value } = event.target;

    this.setState(() => {
      return {
        keyword: value,
      };
    });
  }

  render() {
    const { keyword } = this.state;
    const { onHandleSubmit, onKeywordChangeHandler } = this;

    return (
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="search-movie"
          placeholder="search movie by title"
          id="search-movie"
          value={keyword}
          onChange={onKeywordChangeHandler}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  defaultKeyword: Proptypes.string,
  search: Proptypes.func.isRequired,
};
