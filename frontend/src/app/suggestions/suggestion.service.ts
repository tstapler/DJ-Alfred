import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Suggestion } from './suggestion';
import { mock_suggestions } from './mock-suggestion';

@Injectable()
export class SuggestionService {
  suggestions: Suggestion[] = mock_suggestions;
  private suggestionSource = new Subject();

  suggestions$ = this.suggestionSource.asObservable();

  getSuggestions() {
   return this.suggestions;
  }

  addSuggestion(data) {
   this.suggestions.push(data);
   this.suggestionSource.next(this.suggestions);
  }
}
