import { Component, Input, OnInit } from '@angular/core';
import { IGenre } from 'src/app/interfaces/genre';
import { IResultMovie } from 'src/app/interfaces/movie';
import { IResultSearch } from 'src/app/interfaces/search';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
})
export class CardMovieComponent implements OnInit {
  bareImageUrl: string = '';
  @Input() isLoading: boolean | undefined;
  @Input() dataMovie!: IResultMovie | IResultSearch;
  @Input() dataGenre!: IGenre[];
  @Input() search: boolean = false;
  vote_average!: number;
  constructor() {}

  ngOnInit() {
    this.bareImageUrl = environment.bareImageUrl;
    this.vote_average = this.calculatePercentage(this.dataMovie.vote_average);
  }

  calculatePercentage(value: number) {
    const percentage = (value / 10) * 100;
    return percentage;
  }

  getGenreTags(genreIds: number[]): string[] {
    if (!this.dataGenre) {
      return [];
    }
    const genreNames = this.dataGenre
      .filter((genre) => genreIds.includes(genre.id))
      .map((genre) => genre.name)
      .slice(0, 2);
    return genreNames;
  }
}
