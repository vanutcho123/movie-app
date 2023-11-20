import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';
import { IRootDetailMovie } from 'src/app/interfaces/detailMovie';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
import { Cast } from 'src/app/interfaces/credits';
import { IResultVideos } from 'src/app/interfaces/videos';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public idMovie!: string | null;
  public type!: string | null;
  public dataDetail?: IRootDetailMovie;
  public dataTopCast?: Cast[];
  public dataVideo!: IResultVideos[];
  public bareImageUrl = environment.bareImageUrl;
  public isLoading: boolean = false;
  public showVideo: boolean = false;
  public videoId: string = '';
  public navCtrl: NavController;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    navCtrl: NavController
  ) {
    this.navCtrl = navCtrl;
  }
  async ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.type = params.get('type');
      this.idMovie = params.get('id');
      if (this.type === 'movie') {
        this.getDataMovieDetail();
      } else {
        this.getDataTvDetail();
      }
    });
    this.getDataCredits();
    this.getDataVideos();

    let apiLoaded = false;
    if (!apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
  handleShowVideo() {
    this.showVideo = true;
  }
  getDataMovieDetail() {
    if (this.idMovie) {
      this.isLoading = true;
      this.movieService.getApiDetailMovie(this.idMovie).subscribe({
        next: (res) => {
          this.dataDetail = res;
        },
        error: () => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
  getDataTvDetail() {
    if (this.idMovie) {
      this.isLoading = true;
      this.movieService.getApiDetailTv(this.idMovie).subscribe({
        next: (res) => {
          this.dataDetail = res;
        },
        error: () => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }

  getDataCredits() {
    if (this.idMovie) {
      this.isLoading = true;
      this.movieService.getApiCredit(this.idMovie).subscribe({
        next: (res) => {
          this.dataTopCast = res.cast;
        },
        error: () => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }

  getDataVideos() {
    if (this.idMovie) {
      this.isLoading = true;
      this.movieService.getApiVideos(this.idMovie).subscribe({
        next: (res) => {
          this.dataVideo = res.results;
        },
        error: () => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
}
