import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-rating',
  templateUrl: './circle-rating.component.html',
  styleUrls: ['./circle-rating.component.scss'],
})
export class CircleRatingComponent implements OnInit {
  constructor() {}
  @Input() vote_average!: number;

  ngOnInit() {}
}
