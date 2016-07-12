import { Component } from '@angular/core';
import { SuggestionBox, SuggestionList } from './suggestions';
import { Navbar } from './shared';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { routes } from './app.routes';

@Component({
  moduleId: module.id,
	selector: 'my-app',
	directives: [ Navbar, ROUTER_DIRECTIVES ],
	templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router) {}
}
