import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  searchHistory!: string[];
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.searchHistoryChanged.subscribe((searchHistoryArray) => {
      this.searchHistory = searchHistoryArray;
    });
  }
}
