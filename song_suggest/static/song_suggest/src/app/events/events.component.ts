import { Component, OnInit } from '@angular/core';
import { EventComponent } from './event';
import { EventCalendarComponent } from './event-calendar';
import { EventListComponent } from './event-list';
import { EventService } from './event.service';

@Component({
  moduleId: module.id,
  selector: 'events',
  templateUrl: 'events.component.html',
  styleUrls: ['events.component.css'],
  directives: [ EventCalendarComponent, EventListComponent ],
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
