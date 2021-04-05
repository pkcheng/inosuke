import { useEffect, useState } from "react";
import { getEpisodes } from "../../js/anime";
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import "./EpisodesAccordion.css";

const EpisodesAccordion = ({ link }) => {
  const [episodes, setEpisodes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const episodesData = await getEpisodes(link);
      setEpisodes(episodesData);
      setLoading(false);
    }
    fetchData();
  }, [link]);
  return (
    <div id="accordion2">
      <div className="card">
        {/* Episodes Header */}
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            <a
              href="/#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Episodes
            </a>
          </h5>
        </div>
        {/* Episodes Body */}
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headinTwo"
          data-parent="#accordion2"
        >
          <div className="card-body">
            {/* Check Character Loading */}
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
              /* Display Character if not Loading */
              <div className="row">
                {episodes.length !== 0 ? (
                  episodes.map((episode) => {
                    return (
                      <div
                        className="col-lg-3 col-md-4 col-sm-6"
                        key={episode.id}
                      >
                        <EpisodeCard data={episode} />
                      </div>
                    );
                  })
                ) : (
                  <div className="col-lg-12">
                    <p className="text-center">No Episodes Information</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodesAccordion;
