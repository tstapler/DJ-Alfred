import { Injectable } from '@angular/core';
import { mock_suggestions } from './mock-suggestion';
import { SuggestionItem } from './suggestion.component'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SuggestionService {
  suggestions:any[];
  private suggestionSource = new Subject();

  suggestions$ = this.suggestionSource.asObservable();

  constructor() {
    this.suggestions = mock_suggestions
  }

	getSuggestions () {
	 return this.suggestions;
	}

  addSuggestion(data){
   this.suggestions.push(data)
   this.suggestionSource.next(this.suggestions)
  }
}
