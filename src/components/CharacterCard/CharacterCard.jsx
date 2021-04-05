import { useState, useEffect } from "react";
import { getCharacter } from "../../js/anime";
import "./CharacterCard.css";

const CharacterCard = ({ link }) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getCharacter(
        `https://kitsu.io/api/edge/anime-characters/${link.id}/character`
      );
      setCharacter(data);
      setLoading(false);
    }
    fetchData();
  }, [link]);

  return (
    <>
      {loading ? (
        <div className="row pt-5 pb-5">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="character mb-3">
          <img
            className="character-img image-fluid"
            src={
              character.attributes.image
                ? character.attributes.image.original
                : "https://www.pngkey.com/png/detail/109-1093305_unknown-character.png"
            }
            draggable="false"
            alt="character"
          />
          <h6 className="mt-1">{character.attributes.name}</h6>
        </div>
      )}
    </>
  );
};

export default CharacterCard;
