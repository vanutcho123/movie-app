import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';
import { IRootDetailMovie } from 'src/app/interfaces/detailMovie';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
import { Cast } from 'src/app/interfaces/credits';

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
  public bareImageUrl = environment.bareImageUrl;
  public isLoading: boolean = false;
  navCtrl: NavController;
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
}
