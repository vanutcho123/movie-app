import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeTrendingComponent } from './home-trending/home-trending.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { CircleRatingComponent } from './circle-rating/circle-rating.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomePopularComponent } from './home-popular/home-popular.component';
import { HomeTopratedComponent } from './home-toprated/home-toprated.component';
import { HomeUpcomingComponent } from './home-upcoming/home-upcoming.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  declarations: [
    HomeTrendingComponent,
    HomePopularComponent,
    HomeTopratedComponent,
    CardMovieComponent,
    CircleRatingComponent,
    HomeUpcomingComponent,
  ],
  exports: [
    HomeTrendingComponent,
    CardMovieComponent,
    CircleRatingComponent,
    HomePopularComponent,
    HomeTopratedComponent,
    HomeUpcomingComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
