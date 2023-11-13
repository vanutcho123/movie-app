import { Component, Input, OnInit } from '@angular/core';
import { IGenre } from 'src/app/interfaces/genre';
import { IResultMovie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-home-toprated',
  templateUrl: './home-toprated.component.html',
  styleUrls: ['./home-toprated.component.scss'],
})
export class HomeTopratedComponent implements OnInit {
  @Input() dataTopRated!: IResultMovie[];
  @Input() dataGenre!: IGenre[];
  @Input() isLoadingRated!: boolean;

  constructor() {}

  ngOnInit() {
    console.log(this.dataTopRated);
  }
}
