import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'ng2-datetime/src/vendor/bootstrap-datepicker/bootstrap-datepicker.min.js';
import 'ng2-datetime/src/vendor/bootstrap-timepicker/bootstrap-timepicker.min.js';
import { NKDatetime } from 'ng2-datetime/ng2-datetime'
import { Event } from './../event/event'; 
import { EventService } from './../event.service';

@Component({
  moduleId: module.id,
  selector: 'event-form',
  directives: [ NKDatetime ],
  templateUrl: 'event-form.component.html',
  styleUrls: ['event-form.component.css']
})
export class EventFormComponent implements OnInit {
  event: any;
  @Input() modal: any;
  current_event_subscription: any;
  @Input() create_new: boolean;

  constructor(private eventService: EventService) {
    this.current_event_subscription = eventService.current_event$.subscribe(
      event => 
        this.event = event
      ,
      err => console.error(err)
    );
  }

  ngOnInit() {
    this.event = this.eventService.getSelectedEvent()
  }

  submit() {
    if(this.create_new) {
    this.eventService.addEvent(this.event);
    this.event = new Event('', '', new Date, new Date);
    this.eventService.setSelectedEvent(this.event);
    this.create_new = false;
    } else {
    this.eventService.updateEvent(this.event)
    }
    this.modal.hide()
  }

}
