import { Component, OnInit} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EventService } from './event.service';
import { EventModel } from './event';
import { EventFormComponent } from './event-form';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  current_event: any;
  events: any;
  events_subscription: any;
  create_new: boolean = false;

  constructor(private eventService: EventService, private modalService: NgbModal) {
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

  createNewEvent() {
    this.create_new = true;
    let modal = this.modalService.open(EventFormComponent);
    modal.componentInstance.modal = modal;
    modal.componentInstance.create_new = true;
    modal.componentInstance.event = new EventModel('', '', new Date, new Date);
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.current_event = this.eventService.getSelectedEvent();
  }
}
