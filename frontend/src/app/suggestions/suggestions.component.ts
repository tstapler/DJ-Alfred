import { Component, OnInit } from '@angular/core';

import { Suggestion } from './suggestion';
import { SuggestionService } from './suggestion.service';
import { mock_suggestions } from './mock-suggestion';

@Component({
  selector: 'suggestions',
  templateUrl: './suggestions.component.html',
  })
export class SuggestionsComponent implements OnInit {
  suggestions: Suggestion[] = [];
  columns: any = [{name:'Title'},{name:'Artist'}];
  subscription: any;

  constructor(private suggestionService: SuggestionService) {
    this.subscription = this.suggestionService.suggestions$.subscribe(
      (suggestions: Suggestion[]) => {
        this.suggestions = suggestions;
      },
      err => console.error(err)
    );
  }

  ngOnInit() {
    this.suggestions = this.suggestionService.getSuggestions();
  }
}
