import "./Trending.css";
import AnimeCard from "../AnimeCard/AnimeCard";

const Trending = ({ trending }) => {
  return (
    <section className="trending pt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mb-3">Trending Now</h3>
          </div>
        </div>

        <div className="row">
          {trending.map((anime) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={anime.id}>
                <AnimeCard anime={anime} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
