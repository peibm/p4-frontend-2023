//import React from "react";
import { Link } from "react-router-dom";
import { Anime } from "../api";

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  // Busca el título por defecto en la lista de títulos.
  // Si no encuentra uno, usa el primer título como respaldo.
  const defaultTitle =
    anime.titles.find((title) => title.type === "Default")?.title ||
    anime.titles[0].title;

  // Usa la pequeña imagen URL de las imágenes webp
  // Si no encuentra webp, usa jpg como respaldo.
  const smallImageUrl =
    anime.images.webp?.image_url || anime.images.jpg.image_url;
  console.log(smallImageUrl);
  return (
    <div className="">
      <div className="">
        <Link
          to={`/anime/${anime.rank}`}
          state={{data: anime}}
          className=""
        >
          <img
            src={smallImageUrl}
            alt={defaultTitle}
            className=""
          />
          <h2 className="">{defaultTitle}</h2>
        </Link>
        <div className="">
          {anime.rank}
        </div>
        <div className="">
          {anime.score}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
