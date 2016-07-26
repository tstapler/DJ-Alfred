import { Component, OnInit } from '@angular/core';
import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap';
import { CORE_DIRECTIVES } from '@angular/common';
import { EventComponent } from './event';
import { EventCalendarComponent } from './event-calendar';
import { EventListComponent } from './event-list';
import { EventService } from './event.service';
import { EventFormComponent } from './event-form';

@Component({
  moduleId: module.id,
  selector: 'events',
  templateUrl: 'events.component.html',
  styleUrls: ['events.component.css'],
  directives: [ EventCalendarComponent, EventListComponent,
                EventFormComponent, MODAL_DIRECTIVES,
                CORE_DIRECTIVES],
  viewProviders: [ BS_VIEW_PROVIDERS ],
  providers: [ EventService ]
})
export class EventsComponent implements OnInit {
  events: any;
  subscription: any;
  header: any;

  constructor(private eventService: EventService) {
    this.subscription = eventService.events$.subscribe(
      events => {
        this.events = events
      })
  }


  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
}
