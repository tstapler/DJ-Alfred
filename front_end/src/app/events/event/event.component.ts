import { Component, OnInit } from '@angular/core';
import { Event } from './../event/event';
import { EventService } from './../event.service'

@Component({
  moduleId: module.id,
  selector: 'event',
  providers: [ EventService ],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(
    private event: Event
  ) {}

  ngOnInit() {
  }


}
