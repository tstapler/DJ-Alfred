import { Component, OnInit } from '@angular/core';

import { Suggestion } from './suggestion';
import { SuggestionService } from './suggestion.service';

@Component({
  selector: 'suggestions',
  templateUrl: './suggestions.component.html',
  })
export class SuggestionsComponent implements OnInit {
  suggestions: Suggestion[] = [];
  columns: any = [{name:'Title'},{name:'Artist'}];

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit() {
    this.loadSuggestions();
  }

  loadSuggestions() {
    this.suggestionService.getSuggestions().subscribe(
        suggestions => this.suggestions = suggestions,
        err => {
          console.log(err);
        }
      )
  }
  addedSuggestion(event): void {
    this.suggestions.push(event);
  }
}
