import "./Blog.css";
import { dataLeft, dataRight } from "./blogData";

const Blog = () => {
  return (
    <>
      <section className="banner">
        <div className="filter-layer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div>
                  <h2>Blog</h2>
                  <p>Welcome to PKC's Anime Engine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-2">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="post"
                    style={{
                      backgroundImage: `url('${dataLeft[0].image}'`,
                    }}
                  >
                    <div className="post-filter-layer">
                      <div className="post-text">
                        <p>
                          <i
                            className="fas fa-calendar-minus"
                            style={{ color: "#E53637" }}
                          ></i>
                          &nbsp; {dataLeft[0].date}
                        </p>
                        <h3>{dataLeft[0].title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-2 pr-1">
                  <div
                    className="post-small"
                    style={{
                      backgroundImage: `url('${dataLeft[1].image}'`,
                    }}
                  >
                    <div className="post-filter-layer">
                      <div className="post-text">
                        <p>
                          <i
                            className="fas fa-calendar-minus"
                            style={{ color: "#E53637" }}
                          ></i>
                          &nbsp; {dataLeft[1].date}
                        </p>
                        <h3>{dataLeft[1].title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-2 pl-1">
                  <div
                    className="post-small"
                    style={{
                      backgroundImage: `url('${dataLeft[2].image}'`,
                    }}
                  >
                    <div className="post-filter-layer">
                      <div className="post-text">
                        <p>
                          <i
                            className="fas fa-calendar-minus"
                            style={{ color: "#E53637" }}
                          ></i>
                          &nbsp; {dataLeft[2].date}
                        </p>
                        <h3>{dataLeft[2].title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 my-2 pr-1">
                  <div
                    className="post-small"
                    style={{
                      backgroundImage: `url('${dataRight[0].image}'`,
                    }}
                  >
                    <div className="post-filter-layer">
                      <div className="post-text">
                        <p>
                          <i
                            className="fas fa-calendar-minus"
                            style={{ color: "#E53637" }}
                          ></i>
                          &nbsp; {dataRight[0].date}
                        </p>
                        <h3>{dataRight[0].title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-2 pl-1">
                  <div
                    className="post-small"
                    style={{
                      backgroundImage: `url('${dataRight[1].image}'`,
                    }}
                  >
                    <div className="post-filter-layer">
                      <div className="post-text">
                        <p>
                          <i
                            className="fas fa-calendar-minus"
                            style={{ color: "#E53637" }}
                          ></i>
                          &nbsp; {dataRight[1].date}
                        </p>
                        <h3>{dataRight[1].title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div
                    className="post"
                    style={{
                      backgroundImage: `url('${dataRight[2].image}'`,
                    }}
                  >
                    <div className="post-filter-layer">
                      <div className="post-text">
                        <p>
                          <i
                            className="fas fa-calendar-minus"
                            style={{ color: "#E53637" }}
                          ></i>
                          &nbsp; {dataRight[2].date}
                        </p>
                        <h3>{dataRight[2].title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
