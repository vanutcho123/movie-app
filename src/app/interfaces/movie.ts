export interface IRootMovie {
  dates: IDatesMovie;
  page: number;
  results: IResultMovie[];
  total_pages: number;
  total_results: number;
}

export interface IDatesMovie {
  maximum: string;
  minimum: string;
}

export interface IResultMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  original_name: string;
  name: string;
}
