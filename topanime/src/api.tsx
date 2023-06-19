import axios from "axios";

const api = axios.create({
  baseURL: "http://discord.jikan.moe/", 
});

export const fetchAnimeList = async () => {
  const response = await api.get("/top/anime"); 
  return response.data;
};

export const fetchAnimeDetails = async (id: string) => {
  const response = await api.get(`/anime/${id}`); 
  return response.data;
};
