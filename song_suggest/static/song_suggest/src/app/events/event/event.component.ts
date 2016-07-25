import { Component, OnInit } from '@angular/core';
import { Event } from './../event/event';

@Component({
  moduleId: module.id,
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(
    event: Event
  ) {}

  ngOnInit() {
  }

}
