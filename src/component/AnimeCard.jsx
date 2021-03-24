import React from "react";

const AnimeCard = ({ anime, date }) => {
  return (
    <div className="anime-card col text-center">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <img src={anime.image_url} alt={anime.title} />
      </a>

      <a
        href={anime.url}
        target="_blank"
        style={{
          textDecoration: "none",
          color: "#222222",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          fontSize: "12px",
        }}
        rel="noreferrer"
      >
        <p
          style={{
            width: "220px",
            height: "auto",
            textAlign: "left",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {anime.title}
          <br />
          <span style={{ fontFamily: "Montserrat Light" }}>{date}</span>
        </p>
      </a>
    </div>
  );
};

export default AnimeCard;
