import { Component, OnInit} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EventService } from './event.service';
import { EventModel } from './event';
import { EventFormComponent } from './event-form';

@Component({
  selector: 'events',
  templateUrl: 'events.component.html',
  styleUrls: ['events.component.css'],
})
export class EventsComponent implements OnInit {
  current_event: any;
  events: any;
  events_subscription: any;
  current_event_subscription: any;
  create_new: boolean = false;

  constructor(private eventService: EventService, private modalService: NgbModal) {
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
    this.current_event = this.eventService.getSelectedEvent();
  }

  createNewEvent(content) {
    this.create_new = true;
    this.eventService.setSelectedEvent(new EventModel('', '', new Date, new Date));
    let modal = this.modalService.open(content, {windowClass: "modal fade in"});
  }


  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.current_event = this.eventService.getSelectedEvent();
  }
}
