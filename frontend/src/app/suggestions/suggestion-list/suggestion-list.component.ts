import { Component, ViewChildren, OnInit } from '@angular/core';

import { SuggestionService } from '../suggestion.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'suggestion-list',
  templateUrl: './suggestion-list.component.html',
  providers: [SuggestionService],
})
export class SuggestionListComponent implements OnInit {
  subscription: any;
  suggestions: any;

  constructor(private suggestionService: SuggestionService) {
    this.subscription = suggestionService.suggestions$.subscribe(
      suggestions => {
        this.suggestions = suggestions;
      });
  }


  ngOnInit() {
    this.suggestions = this.suggestionService.getSuggestions();
  }

}
