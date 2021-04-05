import "./AnimeDetail.css";
import { getAnimeById } from "../../js/anime";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CharactersAccordion from "../CharactersAccordion/CharactersAccordion";
import EpisodesAccordion from "../EpisodesAccordion/EpisodesAccordion";

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const animeData = await getAnimeById(id);
      setAnime(animeData);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  return (
    <section className="anime-detail">
      {/* Path */}
      <div className="path-options pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Link to="/" style={{ color: "white" }}>
                <i className="fas fa-home"></i>
                Home
              </Link>
              &nbsp; &gt; &nbsp;
              <span>{!loading && anime.attributes.canonicalTitle}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Check Anime Loading */}
      {loading ? (
        /* Display Spinner if Loading */
        <div className="row pt-5 pb-5">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        /* Display Content if not Loading */
        <div className="anime-content pt-5 pb-5">
          <div className="container">
            <div className="row">
              {/* Anime Poster */}
              <div className="col-lg-3">
                <img
                  className="image-fluid anime-img"
                  src={anime.attributes.posterImage.original}
                  draggable="false"
                  alt="anime poster"
                ></img>
                {anime.attributes.youtubeVideoId && (
                  <a
                    className="btn btn-danger my-3 w-100"
                    target="_blank"
                    href={`https://www.youtube.com/watch?v=${anime.attributes.youtubeVideoId}`}
                    rel="noreferrer"
                  >
                    Trailer
                  </a>
                )}
              </div>
              {/* Anime Detail */}
              <div className="col-lg-9">
                <div className="anime-info">
                  {/* Anime Title */}
                  <h3 className="anime-title">
                    {anime.attributes.canonicalTitle}
                  </h3>
                  <h6 className="card-subtitle mb-2 text-muted pt-2">
                    {anime.attributes.titles.ja_jp}
                  </h6>
                  {/* Anime Description */}
                  <p className="pt-2">{anime.attributes.description}</p>
                </div>
                {/* Anime Meta Data*/}
                <div className="anime-widget">
                  <div className="row">
                    <div className="col-lg-6">
                      <dl className="row">
                        <dt className="col-sm-3">Type</dt>
                        <dd className="col-sm-9">
                          {anime.attributes.showType}
                        </dd>
                        <dt className="col-sm-3">Status</dt>
                        <dd className="col-sm-9">{anime.attributes.status}</dd>
                        <dt className="col-sm-3">Episode</dt>
                        <dd className="col-sm-9">
                          {anime.attributes.episodeCount
                            ? anime.attributes.episodeCount
                            : "Unknown"}
                        </dd>
                        <dt className="col-sm-3">Duration</dt>
                        <dd className="col-sm-9">
                          {anime.attributes.episodeLength} min/ep
                        </dd>
                      </dl>
                    </div>
                    <div className="col-lg-6">
                      <dl className="row">
                        <dt className="col-sm-3">Rating</dt>
                        <dd className="col-sm-9">
                          {anime.attributes.averageRating
                            ? `${anime.attributes.averageRating}/100`
                            : "Unknown"}
                        </dd>
                        <dt className="col-sm-3">Ranking</dt>
                        <dd className="col-sm-9">
                          {anime.attributes.popularityRank}
                        </dd>
                        <dt className="col-sm-3">Start Date</dt>
                        <dd className="col-sm-9">
                          {anime.attributes.startDate
                            ? anime.attributes.startDate
                            : "Unknown"}
                        </dd>
                        <dt className="col-sm-3">End Date</dt>
                        <dd className="col-sm-9">
                          {anime.attributes.endDate
                            ? anime.attributes.endDate
                            : "Unknown"}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Characters Panel */}
            <div className="row mt-5 mb-4">
              <div className="col-lg-12">
                <CharactersAccordion
                  link={anime.relationships.animeCharacters.links.related}
                />
              </div>
            </div>
            {/* Episodes Panel */}
            <div className="row my-4">
              <div className="col-lg-12">
                <EpisodesAccordion
                  link={anime.relationships.episodes.links.related}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AnimeDetail;
