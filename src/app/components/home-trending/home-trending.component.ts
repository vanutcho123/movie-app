import { Component, Input, OnInit } from '@angular/core';
import { IGenre } from 'src/app/interfaces/genre';
import { IResultMovie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-home-trending',
  templateUrl: './home-trending.component.html',
  styleUrls: ['./home-trending.component.scss'],
})
export class HomeTrendingComponent implements OnInit {
  constructor() {}
  @Input() dataTrending!: IResultMovie[];
  @Input() dataGenre!: IGenre[];
  @Input() isLoadingTrending!: boolean;

  ngOnInit() {
    console.log(this.isLoadingTrending);
  }
}
