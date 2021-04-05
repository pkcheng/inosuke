import "./Categories.css";
import { getCategories, getPopularCategories } from "../../js/anime";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState(null);
  const [popularCategories, setPopularCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const categoriesData = await getCategories();
      setCategories(categoriesData);

      const popularData = await getPopularCategories();
      setPopularCategories(popularData);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <section className="categories">
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
              <span>Categories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="mb-3">Categories</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card-body mb-3">
                  {loading ? (
                    <div className="row pt-5 pb-5">
                      <div className="col-lg-12 d-flex justify-content-center">
                        <div className="spinner-grow" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="row">
                      {categories.map((category) => {
                        return (
                          <div
                            className="col-lg-3 col-sm-6 my-2"
                            key={category.attributes.title}
                          >
                            <Link to={`/category/${category.id}/1`}>
                              <button
                                className="btn btn-secondary"
                                style={{
                                  width: "100%",
                                  height: "75px",
                                  fontFamily: "Montserrat",
                                  fontSize: "15px",
                                }}
                              >
                                {category.attributes.title}
                              </button>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="mb-3">Popular Categories</h3>
              </div>
            </div>
            {loading ? (
              <div className="row pt-5 pb-5">
                <div className="col-lg-12 d-flex justify-content-center">
                  <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                {popularCategories.map((category) => {
                  return (
                    <div
                      className="col-lg-12 col-sm-6 my-2"
                      key={category.attributes.title}
                    >
                      <Link to={`/category/${category.id}/1`}>
                        <button
                          className="btn btn-info"
                          style={{
                            width: "100%",
                            height: "75px",
                            fontFamily: "Montserrat",
                            fontSize: "15px",
                          }}
                        >
                          {category.attributes.title}
                        </button>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
