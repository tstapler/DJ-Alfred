import { Component, ViewChildren, OnInit } from '@angular/core';

import { SuggestionService } from '../suggestion.service';
import { Suggestion} from '../suggestion';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
	selector: 'suggestion-list',
	templateUrl: './suggestion-list.component.html',
	providers: [SuggestionService],
	directives: [Suggestion]
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
	}

}
