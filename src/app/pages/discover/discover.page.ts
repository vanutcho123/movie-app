import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { IResultMovie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  selectedSegment: string = 'movies';
  dataDiscoverMovie: IResultMovie[] = [];
  dataDiscoverTv: IResultMovie[] = [];
  bareImageUrl = environment.bareImageUrl;
  currentPageMovie: number = 1;
  currentPageTv: number = 1;

  constructor(
    private movieService: MovieService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getDataDiscoverMovie();
  }
  segmentChanged(event: CustomEvent) {
    this.selectedSegment = event.detail.value as string;
    this.loadDataBasedOnSegment();
  }

  loadDataBasedOnSegment() {
    if (this.selectedSegment === 'movies') {
      this.getDataDiscoverMovie();
    } else if (this.selectedSegment === 'tvSeries') {
      this.getDataDiscoverTv();
    }
  }

  async getDataDiscoverMovie(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();
    this.movieService.getApiDiscoverMovie(this.currentPageMovie).subscribe({
      next: (res) => {
        loading.dismiss();
        this.dataDiscoverMovie.push(...res.results);
        event?.target.complete();
        if (event) {
          event.target.disabled = res.total_pages === this.currentPageMovie;
        }
      },
      error: () => {},
      complete: () => {},
    });
  }

  async getDataDiscoverTv(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();
    this.movieService.getApiDiscoverTvSeries(this.currentPageTv).subscribe({
      next: (res) => {
        loading.dismiss();
        this.dataDiscoverTv.push(...res.results);
        event?.target.complete();
        if (event) {
          event.target.disabled = res.total_pages === this.currentPageTv;
        }
      },
      error: () => {},
      complete: () => {},
    });
  }

  loadData(event: InfiniteScrollCustomEvent) {
    if (this.selectedSegment === 'movies') {
      this.currentPageMovie++;
      this.getDataDiscoverMovie(event);
    } else if (this.selectedSegment === 'tvSeries') {
      this.currentPageTv++;
      this.getDataDiscoverTv(event);
    }
  }
}
