import "./SlidePlayer.css";
import { Link } from "react-router-dom";
import { data } from "./slideData";

const SlidePlayer = () => {
  return (
    <section className="slide-player pt-5">
      <div className="container">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade w-100"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            {data.slice(1).map((slide, index) => {
              return (
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to={index + 1}
                  key={index + 1}
                ></li>
              );
            })}
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={data[0].img}
                className="d-block w-100"
                alt="hero"
                width="1110px"
                height="535px"
              />
              <div className="carousel-caption">
                <h5>{data[0].title}</h5>
                <p>{data[0].desc}</p>
                <Link to={`/anime/${data[0].id}`} className="btn btn-danger">
                  Learn More
                </Link>
              </div>
            </div>
            {data.slice(1).map((slide) => {
              return (
                <div className="carousel-item" key={slide.title}>
                  <img
                    src={slide.img}
                    className="d-block w-100"
                    alt="hero"
                    width="1110px"
                    height="535px"
                  />
                  <div className="carousel-caption">
                    <h5>{slide.title}</h5>
                    <p>{slide.desc}</p>
                    <Link to={`/anime/${slide.id}`} className="btn btn-danger">
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <button className="btn btn-dark">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <button className="btn btn-dark">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SlidePlayer;
