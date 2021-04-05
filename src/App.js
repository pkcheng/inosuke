import NavBar from "./components/NavBar/NavBar";
import SlidePlayer from "./components/SlidePlayer/SlidePlayer";
import Trending from "./components/Trending/Trending";
import SearchResult from "./components/SearchResult/SearchResult";
import AnimeDetail from "./components/AnimeDetail/AnimeDetail";
import Categories from "./components/Categories/Categories";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import { Switch, Route, useHistory } from "react-router-dom";
import { getTrending } from "./js/anime";
import { useEffect, useState } from "react";
import Category from "./components/Category/Category";

function App() {
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getTrending();
      setTrending(data.slice(0, 8));
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${search}/1`);
    setSearch("");
  };

  return (
    <div className="App">
      <NavBar
        handleSearch={handleSearch}
        handleChange={(e) => setSearch(e.target.value)}
        search={search}
      />
      <Switch>
        {/* Home Page */}
        <Route exact path="/">
          <SlidePlayer />
          {loading ? (
            <div className="row pt-5 pb-5">
              <div className="col-lg-12 d-flex justify-content-center">
                <div className="spinner-grow" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <Trending trending={trending} />
          )}
        </Route>

        {/* Search Result Page */}
        <Route exact path="/search/:id/:n">
          <SearchResult />
        </Route>

        {/* Anime Detail Page */}
        <Route exact path="/anime/:id">
          <AnimeDetail />
        </Route>

        {/* Categories Page */}
        <Route exact path="/categories">
          <Categories />
        </Route>

        {/* Category Page */}
        <Route exact path="/category/:id/:n">
          <Category />
        </Route>

        {/* Blog Page */}
        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
