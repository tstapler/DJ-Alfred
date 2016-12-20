import { Injectable } from '@angular/core';
import { mock_suggestions } from './mock-suggestion';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SuggestionService {
  suggestions: any[] = mock_suggestions;
  private suggestionSource = new Subject();

  suggestions$ = this.suggestionSource.asObservable();

	getSuggestions () {
	 return this.suggestions;
	}

  addSuggestion(data){
   this.suggestions.push(data)
   this.suggestionSource.next(this.suggestions)
  }
}
