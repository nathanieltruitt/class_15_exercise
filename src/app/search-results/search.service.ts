import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchHistoryChanged = new EventEmitter();
  constructor() {}
}
