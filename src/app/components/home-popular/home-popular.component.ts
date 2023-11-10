import { Component, Input, OnInit } from '@angular/core';
import { IGenre } from 'src/app/interfaces/genre';
import { IResultMovie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-home-popular',
  templateUrl: './home-popular.component.html',
  styleUrls: ['./home-popular.component.scss'],
})
export class HomePopularComponent implements OnInit {
  @Input() dataPopular!: IResultMovie[];
  @Input() dataGenre!: IGenre[];
  @Input() isLoadingPopular!: boolean;

  constructor() {}
  ngOnChanges() {
    this.dataPopular;
  }
  ngOnInit() {}
}
