import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { IResultMovie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-related-movie',
  templateUrl: './related-movie.component.html',
  styleUrls: ['./related-movie.component.scss'],
})
export class RelatedMovieComponent implements OnInit {
  @Input() idMovie!: string | null;
  @Input() bareImageUrl!: string;

  dataRelated: IResultMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getDataSimilar();
  }

  getDataSimilar() {
    if (this.idMovie) {
      this.movieService.getApiSimilar(this.idMovie).subscribe((res) => {
        this.dataRelated = res.results;
      });
    }
  }
}
