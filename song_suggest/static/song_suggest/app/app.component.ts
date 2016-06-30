import { Component } from '@angular/core';
import { SuggestionList } from './suggestion-list.component'
import { SuggestionBox } from './suggestion_box.component'
import { Navbar } from './navbar.component'
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
	selector: 'my-app',
	directives: [ SuggestionList, SuggestionBox, Navbar],
	templateUrl: './app/app.component.html'
})
export class AppComponent {
}
