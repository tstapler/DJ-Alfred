import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // viewContainerRef is a hack to make ng2-bootstrap modals work
  constructor(private router: Router, viewContainerRef: ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    (this as any).viewContainerRef = viewContainerRef;  }
}
