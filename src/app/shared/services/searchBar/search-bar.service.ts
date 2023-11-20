import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  isSearchBarFocused: boolean = false;
  constructor() {}
}
