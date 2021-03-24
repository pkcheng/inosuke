import "./asset/main.css";
import NavBar from "./component/NavBar";
import Content from "./component/Content";
import React, { useState, useEffect } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [topAnime, setTopAnime] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTopAnime = async () => {
    await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then((res) => res.json())
      .then((response) => setTopAnime(response.top.slice(0, 6)));
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchAnime(search);
  };

  const fetchAnime = async (keyword) => {
    await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${keyword}&order_by=title&sort=asc&limit=15`
    )
      .then((res) => res.json())
      .then((res) => {
        setAnimeList(res.results);
        setLoading(false);
      });
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div className="App">
      <NavBar
        handleSearch={handleSearch}
        setSearch={setSearch}
        search={search}
      />
      <Content topAnime={topAnime} animeList={animeList} loading={loading} />
    </div>
  );
};

export default App;
