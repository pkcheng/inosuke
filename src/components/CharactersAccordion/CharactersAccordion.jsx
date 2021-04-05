import { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { getCharacters } from "../../js/anime";
import "./CharactersAccordion.css";
const CharactersAccordion = ({ link }) => {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const charactersData = await getCharacters(link + "?page[limit]=20");
      setCharacters(charactersData);
      setLoading(false);
    }
    fetchData();
  }, [link]);

  return (
    <div id="accordion">
      <div className="card">
        {/* Characters Header */}
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <a
              href="/#"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Characters
            </a>
          </h5>
        </div>
        {/* Characters Body */}
        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
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
                {characters.length !== 0 ? (
                  characters.map((link) => {
                    return (
                      <div className="col-lg-2 col-md-4 col-sm-6" key={link.id}>
                        <CharacterCard link={link} />
                      </div>
                    );
                  })
                ) : (
                  <div className="col-lg-12">
                    <p className="text-center">No Characters Information</p>
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

export default CharactersAccordion;
