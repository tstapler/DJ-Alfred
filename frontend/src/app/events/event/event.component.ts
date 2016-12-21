import { Component, OnInit } from '@angular/core';
import { EventModel } from './../event/event';
import { EventService } from './../event.service';

@Component({
  selector: 'event',
  providers: [ EventService ],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(
    private event: EventModel
  ) {}

  ngOnInit() {
  }


}
