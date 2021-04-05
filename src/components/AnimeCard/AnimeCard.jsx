import "./AnimeCard.css";
import { Link } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  return (
    <div className="anime-card mb-5">
      <img
        className="image-fluid anime-img"
        src={
          anime.attributes.posterImage.original
            ? anime.attributes.posterImage.original
            : "data:image/png;base64,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"
        }
        draggable="false"
        alt="anime poster"
      ></img>
      <div className="anime-content pt-3">
        <div className="mb-2">
          <span className="badge badge-secondary">
            {anime.attributes.showType}
          </span>
          <span className="badge badge-info">
            {anime.attributes.startDate
              ? anime.attributes.startDate.slice(0, 4)
              : "Unknown"}
          </span>
        </div>
        <h5 className="anime-title">
          <Link to={`/anime/${anime.id}`} style={{ textDecoration: "none" }}>
            {anime.attributes.canonicalTitle}
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default AnimeCard;
