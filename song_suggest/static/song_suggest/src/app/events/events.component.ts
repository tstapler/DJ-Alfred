import { Component, OnInit } from '@angular/core';
import { EventComponent } from './event';
import { EventCalendarComponent } from './event-calendar';
import { EventListComponent } from './event-list';

@Component({
  moduleId: module.id,
  selector: 'events',
  templateUrl: 'events.component.html',
  styleUrls: ['events.component.css'],
  directives: [ EventCalendarComponent, EventListComponent ]
})
export class EventsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
