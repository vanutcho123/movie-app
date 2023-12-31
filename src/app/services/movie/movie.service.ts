import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { IRootMovie } from 'src/app/interfaces/movie';
import { IRootGenre } from 'src/app/interfaces/genre';
import { IRootDetailMovie } from 'src/app/interfaces/detailMovie';
import { IRootCredit } from 'src/app/interfaces/credits';
import { IRootVideos } from 'src/app/interfaces/videos';
import { IRootObjectSearch } from 'src/app/interfaces/search';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getApiTrending(page = 1): Observable<IRootMovie> {
    return this.httpClient.get<IRootMovie>(
      `${environment.bareUrl}/movie/now_playing?api_key=${environment.apiKey}&page=${page}`
    );
  }

  getApiPopular(page = 1): Observable<IRootMovie> {
    return this.httpClient.get<IRootMovie>(
      `${environment.bareUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`
    );
  }

  getApiTopRated(page = 1): Observable<IRootMovie> {
    return this.httpClient.get<IRootMovie>(
      `${environment.bareUrl}/movie/top_rated?api_key=${environment.apiKey}&page=${page}`
    );
  }

  getApiUpComing(page = 1): Observable<IRootMovie> {
    return this.httpClient.get<IRootMovie>(
      `${environment.bareUrl}/movie/upcoming?api_key=${environment.apiKey}&page=${page}`
    );
  }

  getApiGenre(): Observable<IRootGenre> {
    return this.httpClient.get<IRootGenre>(
      `${environment.bareUrl}/genre/movie/list?api_key=${environment.apiKey}`
    );
  }

  //

  getApiDiscoverMovie(page = 1): Observable<IRootMovie> {
    return this.httpClient.get<IRootMovie>(
      `${environment.bareUrl}/discover/movie?api_key=${environment.apiKey}&page=${page}`
    );
  }
  //
  getApiDiscoverTvSeries(page = 1): Observable<IRootMovie> {
    return this.httpClient.get<IRootMovie>(
      `${environment.bareUrl}/discover/tv?api_key=${environment.apiKey}&page=${page}`
    );
  }

  //

  getApiDetailMovie(id: string | null): Observable<IRootDetailMovie> {
    return this.httpClient.get<IRootDetailMovie>(
      `${environment.bareUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }

  getApiDetailTv(id: string | null): Observable<IRootDetailMovie> {
    return this.httpClient.get<IRootDetailMovie>(
      `${environment.bareUrl}/tv/${id}?api_key=${environment.apiKey}`
    );
  }

  //
  getApiSimilar(id: string | null): Observable<IRootMovie> {
    return this.httpClient.get<IRootMovie>(
      `${environment.bareUrl}/movie/${id}/similar?api_key=${environment.apiKey}`
    );
  }

  getApiCredit(id: string | null): Observable<IRootCredit> {
    return this.httpClient.get<IRootCredit>(
      `${environment.bareUrl}/movie/${id}/credits?api_key=${environment.apiKey}`
    );
  }

  // Videos

  getApiVideos(id: string | null): Observable<IRootVideos> {
    return this.httpClient.get<IRootVideos>(
      `${environment.bareUrl}/movie/${id}/videos?api_key=${environment.apiKey}`
    );
  }

  // Search Movie
  getApiSearchMulti(
    page = 1,
    keySearch: string
  ): Observable<IRootObjectSearch> {
    return this.httpClient.get<IRootObjectSearch>(
      `${environment.bareUrl}/search/multi?query=${keySearch}&page=${page}&api_key=${environment.apiKey}`
    );
  }
}
