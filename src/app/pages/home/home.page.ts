import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { IResultMovie } from 'src/app/interfaces/movie';
import { IGenre } from 'src/app/interfaces/genre';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public dataTrending: IResultMovie[] = [];
  public dataPopular: IResultMovie[] = [];
  public dataTopRated: IResultMovie[] = [];
  public dataUpComing: IResultMovie[] = [];
  public currentPage: number = 2;

  public dataGenre: IGenre[] = [];
  public isLoadingTrending: boolean = false;
  public isLoadingPopular: boolean = false;
  public isLoadingTopRated: boolean = false;
  public isLoadingUpComing: boolean = false;

  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.getDataGenre();
    this.getDataMovieTrending();
    this.getDataMoviePopular();
    this.getDataMovieTopRated();
    this.getDataMovieUpComing();
  }

  getDataMovieTrending() {
    this.isLoadingTrending = true;
    this.movieService.getApiTrending().subscribe({
      next: (res) => {
        this.dataTrending = res.results;
        this.isLoadingTrending = false;
      },
      error: () => {
        this.isLoadingTrending = false;
      },
      complete: () => {
        this.isLoadingTrending = false;
      },
    });
  }
  getDataMoviePopular() {
    this.isLoadingPopular = true;

    this.movieService.getApiPopular(this.currentPage).subscribe({
      next: (res) => {
        this.dataPopular = res.results;
      },
      error: () => {
        this.isLoadingPopular = false;
      },
      complete: () => {
        this.isLoadingPopular = false;
      },
    });
  }

  getDataMovieTopRated() {
    this.isLoadingTopRated = true;
    this.movieService.getApiTopRated().subscribe({
      next: (res) => {
        this.dataTopRated = res.results;
      },
      error: () => {
        this.isLoadingTopRated = false;
      },
      complete: () => {
        this.isLoadingTopRated = false;
      },
    });
  }

  getDataMovieUpComing() {
    this.isLoadingUpComing = true;
    this.movieService.getApiUpComing(this.currentPage).subscribe({
      next: (res) => {
        this.dataUpComing = res.results;
      },
      error: () => {
        this.isLoadingUpComing = false;
      },
      complete: () => {
        this.isLoadingUpComing = false;
      },
    });
  }

  getDataGenre() {
    this.movieService.getApiGenre().subscribe({
      next: (res) => {
        this.dataGenre = res.genres;
      },
      error: () => {},
    });
  }
}
