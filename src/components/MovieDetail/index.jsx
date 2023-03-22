import React from "react";
import Proptypes from "prop-types";

export default function MovieDetail({
  title,
  overview,
  posterPath,
  releaseDate,
}) {
  return (
    <div>
      <img src={posterPath} alt={title} />
      <h2>{title}</h2>
      <p>Release Date: {releaseDate}</p>
      <p>{overview}</p>
    </div>
  );
}

MovieDetail.propTypes = {
  title: Proptypes.string.isRequired,
  posterPath: Proptypes.string.isRequired,
  releaseDate: Proptypes.string.isRequired,
  overview: Proptypes.string.isRequired,
};
