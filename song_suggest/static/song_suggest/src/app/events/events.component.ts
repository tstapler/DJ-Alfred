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
  events: any[];

  header: any;

  constructor() {
  }


  ngOnInit() {

    this.events = [
            {
                "title": "All Day Event",
                "desc": "stuff",
                "start": "2016-01-01",
                "end": new Date
            },
            {
                "title": "Long Event",
                "desc": "stuff",
                "start": "2016-01-07",
                "end": "2016-01-10",
            },
            {
                "title": "Repeating Event",
                "desc": "stuff",
                "start": "2016-01-09T16:00:00",
            },
            {
                "title": "Repeating Event",
                "desc": "stuff",
                "start": "2016-01-16T16:00:00",
            },
            {
                "title": "Conference",
                "desc": "stuff",
                "start": "2016-01-11",
                "end": "2016-01-13"
            }];
  }
}
