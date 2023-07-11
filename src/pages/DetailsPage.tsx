import { useLocation } from "react-router-dom";


const DetailsPage = () => {
  const location = useLocation();

  const anime = location.state.data;
  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.image} alt={anime.title} />
      <p>{anime.synopsis}</p>
      <p>Score: {anime.score}</p>
      <p>Episodes: {anime.episodes}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default DetailsPage;
