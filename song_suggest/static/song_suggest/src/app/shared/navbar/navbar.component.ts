import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  directives: [ROUTER_DIRECTIVES]
  })
export class Navbar {
  routes: any
  constructor(){
    this.routes = routes
  }
}
