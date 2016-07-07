import { Component } from '@angular/core';
import { SuggestionBox, SuggestionList } from './suggestions'
import { Navbar } from './shared'
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  moduleId: module.id,
	selector: 'my-app',
	directives: [ SuggestionList, SuggestionBox, Navbar],
	templateUrl: './app.component.html'
})
export class AppComponent {
}
