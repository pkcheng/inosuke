import AnimeCard from "./AnimeCard";

const Content = ({ topAnime, animeList, loading }) => {
  let list = animeList;
  if (animeList.length === 0) {
    list = topAnime;
  }
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <p
          className="mx-auto"
          style={{
            fontFamily: "Montserrat Black",
            color: "#222222",
            fontSize: "32px",
          }}
        >
          {animeList.length === 0 ? "Popular Anime" : "Result"}
        </p>
      </div>
      <div className="row content mx-auto">
        {loading ? (
          <div className="spinner-border  mx-auto" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          list.map((anime) => {
            return (
              <AnimeCard
                key={anime.mal_id}
                anime={anime}
                date={
                  anime.start_date === null
                    ? "Unknown"
                    : animeList.length === 0
                    ? anime.start_date.slice(4)
                    : anime.start_date.slice(0, 4)
                }
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Content;
