import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
  })
export class Navbar {
  public isCollapsed = true;
  routes: any;
  constructor(){
    this.routes = routes;
  }
}
