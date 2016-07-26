import { Component, OnInit } from '@angular/core';
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
  providers: [ EventService ],
  templateUrl: 'event-form.component.html',
  styleUrls: ['event-form.component.css']
})
export class EventFormComponent implements OnInit {
  event: Event = new Event('', '', new Date, new Date);

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
  }

  submit() {
    this.eventService.addEvent(this.event)
    this.event = new Event('', '', new Date, new Date)

  }

}
