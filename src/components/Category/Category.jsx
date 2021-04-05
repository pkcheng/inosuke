import "./Category.css";
import AnimeCard from "../AnimeCard/AnimeCard";
import { getCategory } from "../../js/anime";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Category = () => {
  const { id, n } = useParams();
  const [title, setTitle] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getCategory(id, n);
      setResult(data.data);
      setTitle(data.title);
      const pageNum = Math.ceil(data.meta.count / 20);
      let pagination = [];
      for (let i = 0; i < pageNum; i++) {
        if (i === 10) {
          break;
        }
        pagination.push(
          <li className="page-item" key={i + 1}>
            <Link className="page-link" to={`/category/${id}/${i + 1}`}>
              {i + 1}
            </Link>
          </li>
        );
      }
      setPagination(pagination);
      setLoading(false);
      window.scrollTo(0, 0);
    }
    fetchData();
  }, [id, n]);

  return (
    <section className="category">
      <div className="container">
        {/* Path */}
        <div className="path-options pt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Link to="/">
                  <i className="fas fa-home"></i>
                  Home
                </Link>
                &nbsp; &gt; &nbsp;
                <Link to="/categories">Categories</Link>
                &nbsp; &gt; &nbsp;
                <span>{title && title}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center">Category: {title && title}</h2>
          </div>
        </div>

        {/* Check Loading */}
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
          /*Display Result if not Loading*/
          <div className="row pt-5">
            {result &&
              result.map((anime) => {
                return (
                  <div className="col-lg-3" key={anime.id}>
                    <AnimeCard anime={anime} />
                  </div>
                );
              })}
          </div>
        )}
        <div className="row mt-2">
          <ul className="pagination mx-auto">
            <li className="page-item">
              <Link
                className={n === "1" ? "page-link disabled" : "page-link "}
                to={`/category/${id}/${n - 1}`}
              >
                <i className="fas fa-arrow-left"></i> Previous
              </Link>
            </li>
            {pagination && pagination}
            <li className="page-item">
              <Link
                className={
                  n === pagination.length.toString()
                    ? "page-link disabled"
                    : "page-link "
                }
                to={`/category/${id}/${n + 1}`}
              >
                Next <i className="fas fa-arrow-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Category;
