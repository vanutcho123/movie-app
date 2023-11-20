import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar, NavController } from '@ionic/angular';
import { SearchBarService } from 'src/app/shared/services/searchBar/search-bar.service';
import { MovieService } from '../../services/movie/movie.service';
import { IResultSearch } from 'src/app/interfaces/search';
import { environment } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public resultsSearch: IResultSearch[] = [];
  public currentPage: number = 1;
  public bareUrlImage = environment.bareImageUrl;
  @ViewChild('searchBar', { static: false }) searchBar!: IonSearchbar;
  public navCtrl: any;
  constructor(
    private searchService: SearchBarService,
    private movieService: MovieService,
    navCtrl: NavController,
    private loadingController: LoadingController
  ) {
    this.navCtrl = navCtrl;
  }
  ngOnInit() {}
  ionViewDidEnter() {
    if (this.searchService.isSearchBarFocused) {
      this.searchBar.setFocus();
      this.searchService.isSearchBarFocused = false;
    }
  }
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.getDataSearchMovie(query);
  }

  async getDataSearchMovie(query: string) {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();
    this.movieService.getApiSearchMulti(this.currentPage, query).subscribe({
      next: (res) => {
        loading.dismiss();
        this.resultsSearch = res.results;
      },
      error: () => {},
      complete: () => {},
    });
  }

  async loadMoreData(event: any) {
    this.currentPage++;

    // Gọi API để lấy thêm dữ liệu
    const query = this.searchBar.value?.toLowerCase() || '';
    this.movieService.getApiSearchMulti(this.currentPage, query).subscribe({
      next: (res) => {
        this.resultsSearch = [...this.resultsSearch, ...res.results];
        event.complete();

        // Nếu không còn dữ liệu để tải, vô hiệu hóa sự kiện cuộn vô hạn
        if (res.results.length === 0) {
          event.disabled = true;
        }
      },
      error: () => {
        event.complete();
      },
      complete: () => {
        event.complete();
      },
    });
  }
}
