import { Component, OnInit } from '@angular/core';
import { Schedule } from 'primeng/primeng'

@Component({
  moduleId: module.id,
  selector: 'event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css'],
  directives: [Schedule]
})
export class EventCalendarComponent implements OnInit {
  events: any[];

  constructor() {}

  ngOnInit() {
    this.events = [
            {
                "title": "All Day Event",
                "start": "2016-01-01"
            },
            {
                "title": "Long Event",
                "start": "2016-01-07",
                "end": "2016-01-10"
            },
            {
                "title": "Repeating Event",
                "start": "2016-01-09T16:00:00"
            },
            {
                "title": "Repeating Event",
                "start": "2016-01-16T16:00:00"
            },
            {
                "title": "Conference",
                "start": "2016-01-11",
                "end": "2016-01-13"
            }];
  }

}
