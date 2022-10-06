import { Component, EventEmitter, OnInit } from '@angular/core';
import { SearchService } from '../search-results/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentSearch!: string;
  searchHistory: string[] = [];
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  addCurrentSearchTerm() {
    // do not run if currentSearch is empty
    if (!this.currentSearch) return;
    this.searchHistory.push(this.currentSearch);
    console.log(this.searchHistory);
    this.searchService.searchHistoryChanged.emit(this.searchHistory.slice());
  }
}
