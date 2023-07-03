import React, { useEffect, useState } from "react";
import { Anime, AnimeQuery, getTopAnimes } from "../api";
import AnimeCard from "../components/AnimeCard";

const HomePage = () => {
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
    <>
      <h1>HomePage</h1>
      {data?.map((anime) => {
        return <AnimeCard key={anime.rank} anime={anime} />;
      })}
    </>
  );
};

export default HomePage;
