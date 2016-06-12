import { Component, Input } from '@angular/core';

@Component({
	selector:'suggestion',
	templateUrl: './app/suggestion.component.html',
	})
export class SuggestionItem {
	@Input()
	suggestion: any
}
