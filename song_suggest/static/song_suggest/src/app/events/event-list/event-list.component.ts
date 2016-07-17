import { Component, OnInit } from '@angular/core';
import { EventComponent } from './../event/event.component';

@Component({
  moduleId: module.id,
  selector: 'event-list',
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css'],
  directives: [ EventComponent ]
})
export class EventListComponent implements OnInit {
  events: EventComponent[];

  constructor() {}

  ngOnInit() {
    this.events = []
    for (var i = 0; i < 4; i++) {
      this.events.push(new EventComponent("Event" + i, "Stuff", new Date, new Date));
    } 
  } 
}
