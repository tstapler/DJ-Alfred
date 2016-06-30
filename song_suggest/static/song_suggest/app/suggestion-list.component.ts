import { Component, ViewChildren, OnInit } from '@angular/core';

import { SuggestionService } from './suggestion.service';
import { SuggestionItem } from './suggestion.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'suggestion-list',
	templateUrl: './app/suggestion-list.component.html',
	providers: [SuggestionService],
	directives: [SuggestionItem]
})
export class SuggestionList implements OnInit {
	constructor(private suggestionService: SuggestionService) {
    this.subscription = suggestionService.suggestions$.subscribe(
      suggestions => {
        this.suggestions = suggestions
      })
  }

  subscription:any
	suggestions: any

	ngOnInit() {
		this.suggestions = this.suggestionService.getSuggestions();
//    this.onChangeTable(this.config);
	}

}
