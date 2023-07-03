import React, { useEffect, useState } from "react";
import { Anime, AnimeQuery, getTopAnimes } from "../api";
import AnimeCard from "../components/AnimeCard";

const AnimeGrid = () => {
  const [data, setData] = useState<Anime[] | null>(null);
  const query: AnimeQuery = {
    type: "tv",
    filter: "bypopularity",
    page: 1,
    limit: 1,
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopAnimes(query);
      setData(data);
    };

    fetchData();
  }, []);

  return (
      <div className="">
      {data?.map((anime) => {
        return <AnimeCard key={anime.rank} anime={anime} />;
      })}
      </div>
  );
};

export default AnimeGrid;
