import { Component } from '@angular/core';
import { SuggestionList } from './suggestion-list.component'
import { SuggestionBox } from './suggestion_box.component'

@Component({
	selector: 'my-app',
	directives: [ SuggestionList, SuggestionBox],
	templateUrl: './app/app.component.html'
})
export class AppComponent {
}
