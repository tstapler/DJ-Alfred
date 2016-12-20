import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { EventService } from '../event.service';
import { EventModel } from '../event';

@Component({
  selector: 'event-form',
  templateUrl: 'event-form.component.html',
  styleUrls: ['event-form.component.css']
})
export class EventFormComponent implements OnInit {
  event: any;
  current_event_subscription: any;
  @Input() create_new: boolean;

  constructor(public activeModal: NgbActiveModal, private eventService: EventService) {
    this.current_event_subscription = eventService.current_event$.subscribe(
      event =>
        this.event = event
      ,
      err => console.error(err)
    );
  }

  ngOnInit() {
    this.event = this.eventService.getSelectedEvent();
  }

  submit() {
    if (this.create_new) {
      this.eventService.addEvent(this.event);
      this.event = new EventModel('', '', new Date(''), new Date(''));
      this.eventService.setSelectedEvent(this.event);
      this.create_new = false;
    } else {
      this.eventService.updateEvent(this.event);
    }
    activeModal.close();
  }

}
