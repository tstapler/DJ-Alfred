import { Component } from '@angular/core';
import { SuggestionBox } from './suggestion-box';
import { SuggestionList } from './suggestion-list';

@Component({
  moduleId: module.id,
  selector: 'suggestions',
  templateUrl: './suggestions.component.html',
  directives: [ SuggestionBox, SuggestionList ]
  })
export class Suggestions {
  
}
