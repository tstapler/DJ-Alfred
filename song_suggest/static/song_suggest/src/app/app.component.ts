import { Component, ViewContainerRef } from '@angular/core';
import { SuggestionBox, SuggestionList } from './suggestions';
import { Navbar } from './shared';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
	selector: 'my-app',
	directives: [ Navbar, ROUTER_DIRECTIVES ],
	templateUrl: './app.component.html'
})
export class AppComponent{
  //viewContainerRef is a hack to make ng2-bootstrap modals work
  constructor(private router: Router, viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    (this as any).viewContainerRef = viewContainerRef;  }
}
