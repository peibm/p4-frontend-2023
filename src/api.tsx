import axios from "axios";
export class Anime {
  public rank: number;
  public titles: Title[];
  public images: Images;
  public score: number;
  public synopsis: string;
  public year: number;
  public episodes: number;
  public airing: boolean;
  public status: Status;
  public broadcast: Broadcast;
  public trailer: YoutubeVideo;

  constructor(obj: any) {
    this.rank = obj.rank;
    this.titles = obj.titles;
    this.images = obj.images;
    this.score = obj.score;
    this.synopsis = obj.synopsis;
    this.year = obj.year;
    this.episodes = obj.episodes;
    this.airing = obj.airing;
    this.status = obj.status;
    this.broadcast = obj.broadcast;
    this.trailer = obj.trailer;
  }
}

export enum Status {
  finished = "Finished Airing",
  airing = "Currently Airing",
  complete = "Complete",
  upcoming = "Not yet aired",
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface YoutubeVideo {
  youtube_id: string;
  url: string;
  embed_url: string;
}

export interface Title {
  type: string;
  title: string;
}

export interface Images {
  jpg: ImagesCollection;
  webp?: ImagesCollection;
}

export interface ImagesCollection {
  image_url: string;
  small_image_url?: string;
  large_image_url?: string;
}

export interface AnimeQuery {
  type: "tv" | "movie" | "ova" | "special" | "ona" | "music";
  filter: "airing" | "upcoming" | "bypopularity" | "favorite";
  page: number;
  limit: number;
}

export const getTopAnimes = async (q: AnimeQuery) => {
  const url = `https://api.jikan.moe/v4/top/anime?q=${q.type}/${q.filter}/${q.page}/${q.limit}`;

  try {
    const response = await axios.get(url);
    const { data } = response.data as { data: any[] };
    let animes: Array<Anime> = [];

    for (const anime_all of data) {
      animes.push(new Anime(anime_all));
    }
    return animes;
  } catch (error) {
    console.error(`Error fetching top animes: ${error}`);
    return [];
  }
};
