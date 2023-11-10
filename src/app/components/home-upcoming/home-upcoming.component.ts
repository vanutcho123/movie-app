import { Component, Input, OnInit } from '@angular/core';
import { IGenre } from 'src/app/interfaces/genre';
import { IResultMovie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-home-upcoming',
  templateUrl: './home-upcoming.component.html',
  styleUrls: ['./home-upcoming.component.scss'],
})
export class HomeUpcomingComponent implements OnInit {
  @Input() dataUpComing!: IResultMovie[];
  @Input() dataGenre!: IGenre[];
  @Input() isLoadingUpcoming!: boolean;
  constructor() {}

  ngOnInit() {}
}
