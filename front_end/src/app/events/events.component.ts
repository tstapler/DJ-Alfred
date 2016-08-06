import { Component, OnInit } from '@angular/core';
import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap';
import { CORE_DIRECTIVES } from '@angular/common';
import { EventComponent } from './event/event.component';
import { Event } from './event/event';
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
})
export class EventsComponent implements OnInit {
  current_event: any
  events: any;
  events_subscription: any;
  current_event_subscription: any;
  create_new: boolean = false;

  constructor(private eventService: EventService) {
    this.current_event_subscription = this.eventService.current_event$.subscribe(
      event => {
        this.current_event = event;
      },
      err => console.error(err)
    );
    this.events_subscription = this.eventService.events$.subscribe(
      events => {
        this.events = events;
      },
      err => console.error(err)
    );
  }
  update() {
    this.current_event = this.eventService.getSelectedEvent()
  }
  
  createNewEvent() {
    this.create_new = true;
    this.eventService.setSelectedEvent(new Event('', '', new Date, new Date));
  }


  ngOnInit() {
    this.events = this.eventService.getEvents()
    this.current_event = this.eventService.getSelectedEvent()
  }
}
