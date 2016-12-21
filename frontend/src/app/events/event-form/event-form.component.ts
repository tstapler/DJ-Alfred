import { Component, OnInit, Input } from '@angular/core';

import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { EventService } from '../event.service';
import { EventModel } from '../event';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  event: EventModel;
  modal: NgbModalRef;
  start_date: any;
  start_time: any;
  end_date: any;
  end_time: any;
  current_event_subscription: any;
  @Input() create_new: boolean;

  constructor(private eventService: EventService) {
  }

  submit() {
    if (this.create_new) {
      this.start_date = {};
      this.end_date = {};
      this.eventService.addEvent(this.event);
      this.create_new = false;
    } else {
      this.eventService.updateEvent(this.event);
    }
    this.closeModal();
  }

  closeModal() {
    this.modal.close();
  }
}
